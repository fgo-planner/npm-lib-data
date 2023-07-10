import { MasterServantUtils, UpdateMasterAccount } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';
import mongoose, { Model, ProjectionFields, Schema } from 'mongoose';
import { MasterAccountSchemaDefinition } from '../../schemas';
import { MasterAccountBasicDocument, MasterAccountDocument, MasterAccountLastServantInstanceIdDocument, MasterAccountPlanGroupingDocument, MongooseDocument, ObjectIdOrString } from '../../types';
import { MasterAccountValidators } from '../../validators';


//#region Mongoose document types

export type MasterAccountMongooseDocument = MongooseDocument<ObjectId, MasterAccountDocument>;

export type MasterAccountBasicMongooseDocument = MongooseDocument<ObjectId, MasterAccountBasicDocument>;

export type MasterAccountPlanGroupingMongooseDocument = MongooseDocument<ObjectId, MasterAccountPlanGroupingDocument>;

export type MasterAccountLastServantInstanceIdMongooseDocument = MongooseDocument<ObjectId, MasterAccountLastServantInstanceIdDocument>;

//#endregion


//#region Projections

const MasterAccountBasicProjection = {
    name: 1,
    friendId: 1,
    createdAt: 1,
    updatedAt: 1
} as const satisfies ProjectionFields<MasterAccountBasicDocument>;

const PlanGroupingProjection = {
    planGrouping: 1
} as const satisfies ProjectionFields<MasterAccountPlanGroupingDocument>;

const LastServantInstanceIdProjection = {
    servants: {
        lastServantInstanceId: 1
    }
} as const satisfies ProjectionFields<MasterAccountLastServantInstanceIdDocument>;

//#endregion


//#region Static function implementations

/**
 * Checks if the given friend ID string is in a valid format. Friend IDs must
 * be exactly 9 characters long and can only contain numerical digits.
 */
const isFriendIdFormatValid = MasterAccountValidators.isFriendIdFormatValid;

/**
 * Creates a query for retrieving the master accounts associated with the given
 * `userId`. Result will contain simplified version of the master account data.
 */
function findByUserId(this: Model<MasterAccountDocument>, userId: ObjectIdOrString) {
    return this.find<MasterAccountBasicMongooseDocument>({ userId }, MasterAccountBasicProjection);
}

function findPlanGroupingById(this: Model<MasterAccountDocument>, accountId: ObjectIdOrString) {
    return this.findById<MasterAccountPlanGroupingMongooseDocument>(accountId, PlanGroupingProjection);
}

/**
 * Performs a partial update of the master account. Calls the `findOneAndUpdate`
 * method internally, with some custom validations. All updates to existing
 * documents in the collection should be done through this method if possible.
 */
async function partialUpdate(this: Model<MasterAccountDocument>, update: UpdateMasterAccount) {

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
        const existing = await this.findById<MasterAccountLastServantInstanceIdMongooseDocument>(id, LastServantInstanceIdProjection);
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

    return this.findOneAndUpdate<MasterAccountMongooseDocument>(
        { _id: id },
        { $set: update },
        { runValidators: true, new: true }
    );
}

//#endregion


const MasterAccountSchema = new Schema<MasterAccountDocument>(MasterAccountSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    isFriendIdFormatValid,
    findByUserId,
    findPlanGroupingById,
    partialUpdate,
    MasterAccountBasicProjection,
    PlanGroupingProjection
};

// Add the static properties to the schema
Object.assign(MasterAccountSchema.statics, Statics);

// Add additional options
MasterAccountSchema.set('toJSON', {
    versionKey: false
});

type MasterAccountModel = Model<MasterAccountDocument> & typeof Statics;

export const MasterAccountModel = mongoose.model<MasterAccountDocument, MasterAccountModel>(
    'MasterAccount',
    MasterAccountSchema,
    'MasterAccounts'
);
