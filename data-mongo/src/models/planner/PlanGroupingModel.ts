import { ObjectId } from 'bson';
import mongoose, { Model, Schema } from 'mongoose';
import { PlanGroupingSchemaDefinition } from '../../schemas';
import { MongooseDocument, PlanGroupingDocument } from '../../types';


//#region Mongoose document types

export type PlanGroupingDbDocument = MongooseDocument<ObjectId, PlanGroupingDocument>;

//#endregion


//#region Static function implementations

/**
 * Creates a query for retrieving the plan groups associated with the given
 * `accountId`. At most only one document should be returned.
 */
function findByAccountId(this: Model<PlanGroupingDocument>, accountId: ObjectId | string) {
    return this.find<PlanGroupingDbDocument>({ accountId });
}

//#endregion


const PlanGroupingSchema = new Schema<PlanGroupingDocument>(PlanGroupingSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    findByAccountId
};

// Add the static properties to the schema
Object.assign(PlanGroupingSchema.statics, Statics);

// Add additional options
PlanGroupingSchema.set('toJSON', {
    versionKey: false
});

type PlanGroupingModel = Model<PlanGroupingDocument> & typeof Statics;

export const PlanGroupingModel = mongoose.model<PlanGroupingDocument, PlanGroupingModel>(
    'PlanGrouping',
    PlanGroupingSchema,
    'PlanGroupings'
);
