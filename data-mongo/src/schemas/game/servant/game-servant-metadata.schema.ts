import { GameServantMetadata } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { ExternalLinkSchema } from '../../external-link.schema';
import { SearchTagSchema } from '../../SearchTag.schema';

/**
 * Mongoose schema for the `GameServantMetadata` type.
 */
export const GameServantMetadataSchema = new Schema<GameServantMetadata>({
    fgoManagerName: {
        type: String
    },
    searchTags: {
        type: [SearchTagSchema],
        required: true,
        default: []
    },
    links: {
        type: [ExternalLinkSchema],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
