import { SchemaDefinition } from 'mongoose';
import { GameEventDocument } from '../../../types';
import { GameEventRewardSourceSchema } from './GameEventRewardSourceSchema';

/**
 * Mongoose schema definition for the `GameEventDocument` type.
 */
export const GameEventSchemaDefinition: SchemaDefinition<GameEventDocument> = {
    name: {
        type: String,
        required: true
    },
    shortName: {
        type: String
    },
    startDate: {
        type: Date,
        required: true,
        index: true
    },
    endDate: {
        type: Date,
        required: true,
        index: true
    },
    rerun: {
        type: Boolean,
        required: true,
        index: true,
        default: false
    },
    rewardSources: {
        type: [GameEventRewardSourceSchema],
        required: true,
        default: []
    }
};
