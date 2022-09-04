import { GameServantCostume } from '@fgo-planner/data-types';
import { Schema } from 'mongoose';
import { ValidationStrings } from '../../../validators';
import { GameServantEnhancementSchema } from './game-servant-enhancement.schema';

/**
 * Mongoose schema for the `GameServantCostume` type.
 */
export const GameServantCostumeSchema = new Schema<GameServantCostume>({
    collectionNo: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        unique: true
    },
    name: {
        type: String,
        index: true
    },
    materials: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
