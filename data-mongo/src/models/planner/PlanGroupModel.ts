import { ObjectId } from 'bson';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { PlanGroupSchemaDefinition } from '../../schemas';
import { PlanGroupDocument } from '../../types';


//#region Mongoose document types

export type PlanGroupDbDocument = PlanGroupDocument & Document<ObjectId, any, PlanGroupDocument>;

//#endregion


//#region Static function implementations

/**
 * Creates a query for retrieving the plan groups associated with the given
 * `accountId`. At most only one document should be returned.
 */
function findByAccountId(this: Model<PlanGroupDocument>, accountId: ObjectId) {
    return this.find<PlanGroupDbDocument>({ accountId });
}

//#endregion


const PlanGroupSchema = new Schema<PlanGroupDocument>(PlanGroupSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    findByAccountId
};

// Add the static properties to the schema
Object.assign(PlanGroupSchema.statics, Statics);

// Add additional options
PlanGroupSchema.set('toJSON', {
    versionKey: false
});

type PlanGroupModel = Model<PlanGroupDocument> & typeof Statics;

export const PlanGroupModel = mongoose.model<PlanGroupDocument, PlanGroupModel>(
    'PlanGroup',
    PlanGroupSchema,
    'PlanGroups'
);
