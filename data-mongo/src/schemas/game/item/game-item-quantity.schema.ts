import { GameItemQuantity } from '@fgo-planner/data-types';
import { Schema } from 'mongoose';
import { ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `GameItemQuantity` type.
 */
export const GameItemQuantitySchema = new Schema<GameItemQuantity>({
    itemId: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
