import { GameServantMetadata } from '@fgo-planner/data-types';
import { Schema } from 'mongoose';
import { ExternalLinkSchema } from '../../external-link.schema';

/**
 * Mongoose schema for the `GameServantMetadata` type.
 */
export const GameServantMetadataSchema = new Schema<GameServantMetadata>({
    displayName: {
        type: String
    },
    fgoManagerName: {
        type: String
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
