import { GameServantAscensionMaterials, GameServantAttribute, GameServantClass, GameServantConstants, GameServantGachaType, GameServantGender, GameServantSkillMaterials } from '@fgo-planner/data-core';
import { Schema, SchemaDefinition } from 'mongoose';
import { GameServantWithMetadataDocument } from '../../../types';
import { ValidationStrings } from '../../../validators';
import { GameServantCostumeSchema } from './GameServantCostumeSchema';
import { GameServantEnhancementSchema } from './GameServantEnhancementSchema';
import { GameServantMetadataSchema } from './GameServantMetadataSchema';
import { GameServantNoblePhantasmSchema } from './GameServantNoblePhantasmSchema';

/**
 * Mongoose schema for the `GameServantSkillMaterials` type.
 */
const GameServantSkillMaterialsSchema = new Schema<GameServantSkillMaterials>({
    1: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    2: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    3: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    4: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    5: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    6: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    7: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    8: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    9: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});

/**
 * Mongoose schema for the `GameServantAscensionMaterials` type.
 */
const GameServantAscensionMaterialsSchema = new Schema<GameServantAscensionMaterials>({
    1: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    2: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    3: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    4: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});

/**
 * Mongoose schema definition for the `GameServantWithMetadataDocument` type.
 */
export const GameServantSchemaDefinition: SchemaDefinition<GameServantWithMetadataDocument> = {
    _id: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
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
    displayName: {
        type: String
    },
    gachaType: {
        type: String,
        enum: Object.values(GameServantGachaType)
    },
    class: {
        type: String,
        enum: Object.values(GameServantClass),
        required: true,
        default: GameServantClass.Saber,
        index: true
    },
    rarity: {
        type: Number,
        required: true,
        min: GameServantConstants.MinRarity,
        max: GameServantConstants.MaxRarity,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: GameServantConstants.MaxRarity,
        index: true
    },
    cost: {
        type: Number,
        required: true,
        min: GameServantConstants.MinCost,
        max: GameServantConstants.MaxCost,
        // TODO Validate specific values
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: GameServantConstants.MaxCost,
        index: true
    },
    maxLevel: {
        type: Number,
        required: true,
        min: 60,
        max: 90,
        // TODO Validate specific values
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 90
    },
    gender: {
        type: String,
        enum: Object.values(GameServantGender),
        required: true,
        default: GameServantGender.Female
    },
    attribute: {
        type: String,
        enum: Object.values(GameServantAttribute),
        required: true,
        default: GameServantAttribute.Earth
    },
    hpBase: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    hpMax: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    atkBase: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    atkMax: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    growthCurve: {
        type: Number,
        required: true,
        min: 0,
        max: 25,
        // TODO Validate specific values
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    np: {
        type: [GameServantNoblePhantasmSchema],
        required: true,
        default: []
    },
    skillMaterials: {
        type: GameServantSkillMaterialsSchema,
        required: true,
        default: {}
    },
    appendSkillMaterials: {
        type: GameServantSkillMaterialsSchema,
        required: true,
        default: {}
    },
    ascensionMaterials: {
        type: GameServantAscensionMaterialsSchema
    },
    costumes: {
        type: Map,
        of: {
            type: GameServantCostumeSchema
        },
        required: true,
        default: {}
    },
    metadata: {
        type: GameServantMetadataSchema,
        required: true,
        default: {}
    }
};
