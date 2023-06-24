import { ObjectId } from 'bson';
import { Schema } from 'mongoose';
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
    plans: {
        type: [ObjectId],
        required: true,
        default: []
    }
}, {
    storeSubdocValidationError: false,
    timestamps: true
});

/**
 * Mongoose schema for the `PlanGroupingDocument` type.
 */
export const PlanGroupingSchema = new Schema<PlanGroupingDocument>({
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
}, {
    _id: false,
    storeSubdocValidationError: false
});
