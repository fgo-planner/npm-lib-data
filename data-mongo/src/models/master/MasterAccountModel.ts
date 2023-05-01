import { MasterServantUtils } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';
import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { MasterAccountSchemaDefinition } from '../../schemas';
import { BasicMasterAccount, MasterAccount, MasterAccountUpdate } from '../../types';
import { MasterAccountValidators } from '../../validators';

export type MasterAccountDocument = MasterAccount & Document<ObjectId, any, MasterAccount>;
export type BasicMasterAccountDocument = BasicMasterAccount & Document<ObjectId, any, BasicMasterAccount>;

const BasicMasterAccountProjection = {
    name: 1,
    friendId: 1,
    createdAt: 1,
    updatedAt: 1
};

/**
 * Mongoose document model definition for the `MasterAccount` type.
 */
type MasterAccountModel = Model<MasterAccount> & {

    /**
     * Checks if the given friend ID string is in a valid format. Friend IDs must
     * be exactly 9 characters long and can only contain numerical digits.
     */
    isFriendIdFormatValid: (friendId: string) => boolean;

    /**
     * Creates a query for retrieving the master accounts associated with the given
     * `userId`. Result will contain simplified version of the master account data.
     */
    findByUserId: (userId: ObjectId) => Query<Array<BasicMasterAccountDocument>, BasicMasterAccountDocument>;

    /**
     * Performs a partial update of the master account. Calls the `findOneAndUpdate`
     * method internally, with some custom validations. All updates to existing
     * documents in the collection should be done through this method if possible.
     */
    partialUpdate: (update: MasterAccountUpdate) => Query<BasicMasterAccountDocument, BasicMasterAccountDocument>;

};

//#region Static function implementations

const findByUserId = function (
    this: MasterAccountModel,
    userId: ObjectId
): Query<Array<BasicMasterAccountDocument>, BasicMasterAccountDocument> {
    return this.find({ userId }, BasicMasterAccountProjection);
};

const partialUpdate = async function (
    this: MasterAccountModel,
    update: MasterAccountUpdate
): Promise<Query<BasicMasterAccountDocument | null, BasicMasterAccountDocument>> {

    const id = update._id;

    if (update.servants) {
        let lastServantInstanceId = update.servants.lastServantInstanceId || 0;
        /**
         * The updated value should not be less than the largest value in the servants
         * array.
         */
        lastServantInstanceId = Math.max(
            MasterServantUtils.getLastInstanceId(update.servants.servants),
            lastServantInstanceId
        );
        const existing = await this.findById(id, { 'servants.lastServantInstanceId': 1 });
        if (existing) {
            const previousLastServantInstanceId = existing.servants.lastServantInstanceId || 0;
            /**
             * The updated value should never be less than the previous value.
             */
            lastServantInstanceId = Math.max(
                previousLastServantInstanceId,
                lastServantInstanceId
            );
        }
        update.servants.lastServantInstanceId = lastServantInstanceId;
    }

    return this.findOneAndUpdate(
        { _id: id },
        { $set: update },
        { runValidators: true, new: true }
    );
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    isFriendIdFormatValid: MasterAccountValidators.isFriendIdFormatValid,
    findByUserId,
    partialUpdate
};

/**
 * Mongoose schema for the `MasterAccount` type.
 */
const MasterAccountSchema = new Schema<MasterAccount>(MasterAccountSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(MasterAccountSchema.statics, Statics);

MasterAccountSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const MasterAccountModel = mongoose.model<MasterAccount, MasterAccountModel>('MasterAccount', MasterAccountSchema, 'MasterAccounts');
