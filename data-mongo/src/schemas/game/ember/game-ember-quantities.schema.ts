import { GameEmberQuantities } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { CommonValidators, ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `GameEmberQuantities` type.
 */
export const GameEmberQuantitiesSchema = new Schema<GameEmberQuantities>({
    1: {
        type: Number,
        min: 0,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    2: {
        type: Number,
        min: 0,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    3: {
        type: Number,
        min: 0,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    4: {
        type: Number,
        min: 0,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    5: {
        type: Number,
        min: 0,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
