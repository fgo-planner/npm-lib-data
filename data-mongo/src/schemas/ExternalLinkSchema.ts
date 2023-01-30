import { ExternalLink } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';

/**
 * Mongoose schema for the `ExternalLink` type.
 */
export const ExternalLinkSchema = new Schema<ExternalLink>({
    label: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        // TODO Add validation
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
