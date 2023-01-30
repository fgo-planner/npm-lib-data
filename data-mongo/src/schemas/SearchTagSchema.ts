import { SearchTag } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';

/**
 * Mongoose schema for the `SearchTag` type.
 */
export const SearchTagSchema = new Schema<SearchTag>({
    value: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
