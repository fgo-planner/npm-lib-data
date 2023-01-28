import { GameServantEnhancement } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { ValidationStrings } from '../../../validators';
import { ItemQuantitiesSchemaTypeOptions } from '../../common/item/ItemQuantities.schema';

/**
 * Mongoose schema for the `GameServantEnhancement` type.
 */
export const GameServantEnhancementSchema = new Schema<GameServantEnhancement>({
    qp: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    materials: {
        ...ItemQuantitiesSchemaTypeOptions,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
