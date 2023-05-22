import { ObjectId } from 'bson';
import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { PlanListSchemaDefinition } from '../../schemas';
import { PlanList } from '../../types';

export type PlanListDocument = PlanList & Document<ObjectId, any, PlanList>;

/**
 * Mongoose document model definition for the `Plan` type.
 */
type PlanListModel = Model<PlanList> & {

    /**
     * Creates a query for retrieving the plan list associated with the given
     * `accountId`.
     */
    findByAccountId: (accountId: ObjectId) => Query<Array<PlanListDocument>, PlanListDocument>;

};

//#region Static function implementations

const findByAccountId = function (
    this: PlanListModel,
    accountId: ObjectId
): Query<Array<PlanListDocument>, PlanListDocument> {
    return this.find({ accountId });
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByAccountId
};

/**
 * Mongoose schema for the `PlanList` type.
 */
const PlanListSchema = new Schema<PlanList>(PlanListSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(PlanListSchema.statics, Statics);

PlanListSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const PlanListModel = mongoose.model<PlanList, PlanListModel>('PlanList', PlanListSchema, 'PlanLists');
