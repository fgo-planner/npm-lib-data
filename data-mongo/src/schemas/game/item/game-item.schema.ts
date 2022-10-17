import { GameItem, GameItemBackground, GameItemUsage } from '@fgo-planner/data-core';
import { SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../../../validators';

/**
 * Mongoose schema definition for the `GameItem` type.
 */
export const GameItemSchemaDefinition: SchemaDefinition<GameItem> = {
    _id: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    background: {
        type: String,
        enum: Object.keys(GameItemBackground),
        required: true,
        default: GameItemBackground.Bronze
    },
    uses: {
        type: [String],
        enum: Object.keys(GameItemUsage),
        required: true,
        index: true,
        default: []
    }
};
