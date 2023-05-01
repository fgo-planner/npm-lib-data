import { GameEventRewardSource, GameEventRewardSourceType } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { CommonValidators, ValidationStrings } from '../../../validators';
import { ItemQuantitiesSchemaTypeOptions } from '../../common/resources/ItemQuantitiesSchema';

/**
 * Mongoose schema for the `GameEventRewardSource.masterRewards` property.
 */
const GameEventRewardSourceMasterItemsSchema = new Schema<GameEventRewardSource['masterRewards']>({
    silverFous: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    goldFous: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    silverEmbers: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    goldEmbers: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    manaPrisms: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    rarePrisms: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
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
    bronzeFruits: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    silverFruits: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    goldFruits: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    saintQuartz: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    summonTickets: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    flames: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    grails: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    lores: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    rerunLores: {
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

/**
 * Mongoose schema for the `GameEventRewardSource` type.
 */
export const GameEventRewardSourceSchema = new Schema<GameEventRewardSource>({
    type: {
        type: String,
        enum: Object.keys(GameEventRewardSourceType),
        required: true
    },
    name: {
        type: String
    },
    currencyId: {
        type: Number,
        min: 0,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        },
        default: null
    },
    masterRewards: {
        type: GameEventRewardSourceMasterItemsSchema,
        required: true,
        default: {}
    },
    enhancementRewards: {
        ...ItemQuantitiesSchemaTypeOptions,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
