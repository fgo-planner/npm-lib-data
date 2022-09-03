import { ObjectId } from 'bson';
import mongoose, { Document, Model, Query, Schema, UpdateWriteOpResult } from 'mongoose';
import { PlanSchemaDefinition } from '../../schemas';
import { BasicPlan, Plan } from '../../types';

export type PlanDocument = Plan & Document<ObjectId, any, Plan>;
export type BasicPlanDocument = BasicPlan & Document<ObjectId, any, BasicPlan>;

const BasicPlanProjection = {
    groupId: 1,
    name: 1,
    description: 1,
    targetDate: 1,
    shared: 1,
    createdAt: 1,
    updatedAt: 1
};

/**
 * Mongoose document model definition for the `Plan` type.
 */
type PlanModel = Model<Plan> & {

    /**
     * Creates a query for retrieving the plans associated with the given
     * `accountId`. Result will contain simplified version of the plan data.
     */
    findByAccountId: (accountId: ObjectId) => Query<Array<BasicPlanDocument>, BasicPlanDocument>;

    /**
     * Creates a query that removes all plans from a group with the given `groupId`.
     */
    removeFromGroup: (groupId: ObjectId) => Query<UpdateWriteOpResult, PlanDocument>;

};

//#region Static function implementations

const findByAccountId = function (
    this: PlanModel,
    accountId: ObjectId
): Query<Array<BasicPlanDocument>, BasicPlanDocument> {
    return this.find({ accountId }, BasicPlanProjection);
};

const removeFromGroup = function (
    this: PlanModel,
    groupId: ObjectId
): Query<UpdateWriteOpResult, PlanDocument> {
    return this.updateMany({ groupId }, { $unset: { groupId: 1 } });
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByAccountId,
    removeFromGroup
};

/**
 * Mongoose schema for the `Plan` type.
 */
const PlanSchema = new Schema<Plan>(PlanSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(PlanSchema.statics, Statics);

PlanSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const PlanModel = mongoose.model<Plan, PlanModel>('Plan', PlanSchema, 'Plans');
