import { GameSoundtrack } from '@fgo-planner/data-core';
import { SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../../../validators';
import { ItemQuantitiesSchemaTypeOptions } from '../../common/resources/ItemQuantitiesSchema';

/**
 * Mongoose schema definition for the `GameSoundtrack` type.
 */
export const GameSoundtrackSchemaDefinition: SchemaDefinition<GameSoundtrack> = {
    _id: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
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
    name: {
        type: String
    },
    material: ItemQuantitiesSchemaTypeOptions,
    audioUrl: {
        type: String
        // TODO Add URL validation
    },
    thumbnailUrl: {
        type: String
        // TODO Add URL validation
    }
};
