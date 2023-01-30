import { ObjectId } from 'bson';
import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { PlanGroupSchemaDefinition } from '../../schemas';
import { BasicPlanGroup, PlanGroup } from '../../types';

export type PlanGroupDocument = PlanGroup & Document<ObjectId, any, PlanGroup>;
export type BasicPlanGroupDocument = BasicPlanGroup & Document<ObjectId, any, BasicPlanGroup>;

const BasicPlanGroupProjection = {
    name: 1,
    description: 1,
    createdAt: 1,
    updatedAt: 1
};

/**
 * Mongoose document model definition for the `Plan` type.
 */
type PlanGroupModel = Model<PlanGroup> & {

    /**
     * Creates a query for retrieving the plan groups associated with the given
     * `accountId`. Result will contain simplified version of the plan group data.
     */
    findByAccountId: (accountId: ObjectId) => Query<Array<BasicPlanGroupDocument>, BasicPlanGroupDocument>;

};

//#region Static function implementations

const findByAccountId = function (
    this: PlanGroupModel,
    accountId: ObjectId
): Query<Array<BasicPlanGroupDocument>, BasicPlanGroupDocument> {
    return this.find({ accountId }, BasicPlanGroupProjection);
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByAccountId
};

/**
 * Mongoose schema for the `PlanGroup` type.
 */
const PlanGroupSchema = new Schema<PlanGroup>(PlanGroupSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(PlanGroupSchema.statics, Statics);

PlanGroupSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const PlanGroupModel = mongoose.model<PlanGroup, PlanGroupModel>('PlanGroup', PlanGroupSchema, 'PlanGroups');
