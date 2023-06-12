import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { PlanGroupDetailsDocument, PlanGroupDocument } from '../../types';

/**
 * Mongoose schema for the `PlanGroupDetailsDocument` type.
 */
export const PlanGroupDetailsSchema = new Schema<PlanGroupDetailsDocument>({
    name: {
        type: String,
        trim: true,
        maxlength: 63
    },
    description: {
        type: String
        // TODO Add length limit
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    plans: {
        type: [ObjectId],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema definition for the `PlanGroupDocument` type.
 */
export const PlanGroupSchemaDefinition: SchemaDefinition<PlanGroupDocument> = {
    accountId: {
        type: ObjectId,
        required: true,
        unique: true
    },
    ungroupedPlans: {
        type: [ObjectId],
        required: true,
        default: []
    },
    groups: {
        type: [PlanGroupDetailsSchema],
        required: true,
        default: []
    }
};
