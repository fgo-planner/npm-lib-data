import { ObjectId } from 'bson';
import mongoose, { Document, Model, ProjectionFields, Schema } from 'mongoose';
import { PlanSchemaDefinition } from '../../schemas';
import { BasicPlanDocument, PlanDocument } from '../../types';


//#region Projections

const BasicPlanProjection = {
    groupId: 1,
    name: 1,
    description: 1,
    targetDate: 1,
    shared: 1,
    createdAt: 1,
    updatedAt: 1
} as const satisfies ProjectionFields<BasicPlanDocument>;

//#endregion


//#region Mongoose document types

export type PlanDbDocument = PlanDocument & Document<ObjectId, any, PlanDocument>;

export type BasicPlanDbDocument = BasicPlanDocument & Document<ObjectId, any, BasicPlanDocument>;

//#endregion


//#region Static function implementations

/**
 * Creates a query for retrieving the plans associated with the given
 * `accountId`. Result will contain simplified version of the plan data.
 */
function findByAccountId(this: PlanModel, accountId: string | ObjectId) {
    return this.find<BasicPlanDbDocument>({ accountId }, BasicPlanProjection);
}

//#endregion


const PlanSchema = new Schema<PlanDocument>(PlanSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    findByAccountId
};

// Add the static properties to the schema.
Object.assign(PlanSchema.statics, Statics);

// Add additional options
PlanSchema.set('toJSON', {
    versionKey: false
});

type PlanModel = Model<PlanDocument> & typeof Statics;

export const PlanModel = mongoose.model<PlanDocument, PlanModel>(
    'Plan',
    PlanSchema,
    'Plans'
);
