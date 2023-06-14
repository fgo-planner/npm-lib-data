import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { PlanGroupDocument, PlanGroupingDocument } from '../../types';

/**
 * Mongoose schema for the `PlanGroup` type.
 */
export const PlanGroupSchema = new Schema<PlanGroupDocument>({
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
    storeSubdocValidationError: false
});

/**
 * Mongoose schema definition for the `PlanGroupingDocument` type.
 */
export const PlanGroupingSchemaDefinition: SchemaDefinition<PlanGroupingDocument> = {
    accountId: {
        type: ObjectId,
        required: true,
        unique: true
    },
    ungrouped: {
        type: [ObjectId],
        required: true,
        default: []
    },
    groups: {
        type: [PlanGroupSchema],
        required: true,
        default: []
    }
};
