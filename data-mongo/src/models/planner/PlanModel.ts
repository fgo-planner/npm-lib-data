import { ObjectId } from 'bson';
import mongoose, { Model, ProjectionFields, Schema } from 'mongoose';
import { PlanSchemaDefinition } from '../../schemas';
import { MongooseDocument, PlanBasicDocument, PlanDocument } from '../../types';


//#region Mongoose document types

export type PlanMongooseDocument = MongooseDocument<ObjectId, PlanDocument>;

export type PlanBasicMongooseDocument = MongooseDocument<ObjectId, PlanBasicDocument>;

//#endregion


//#region Projections

const PlanBasicProjection = {
    groupId: 1,
    name: 1,
    description: 1,
    targetDate: 1,
    shared: 1,
    createdAt: 1,
    updatedAt: 1
} as const satisfies ProjectionFields<PlanBasicDocument>;

//#endregion


//#region Static function implementations

/**
 * Creates a query for retrieving the plans associated with the given
 * `accountId`. Result will contain simplified version of the plan data.
 */
function findByAccountId(this: PlanModel, accountId: string | ObjectId) {
    return this.find<PlanBasicMongooseDocument>({ accountId }, PlanBasicProjection);
}

/**
 * Creates a query for retrieving the plans associated with the given
 * `accountId`. Result will contain simplified version of the plan data.
 */
function findPlanIdsByAccountId(this: PlanModel, accountId: string | ObjectId) {
    return this.distinct<ObjectId>('_id', { accountId });
}

//#endregion


const PlanSchema = new Schema<PlanDocument>(PlanSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    findByAccountId,
    findPlanIdsByAccountId
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
