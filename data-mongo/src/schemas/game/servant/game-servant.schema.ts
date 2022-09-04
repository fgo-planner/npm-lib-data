import { Schema, SchemaDefinition } from 'mongoose';
import { CommonTransformers } from '../../../transformers';
import { GameServant, GameServantAscensionMaterials, GameServantAttribute, GameServantClass, GameServantGachaType, GameServantGender, GameServantSkillMaterials } from '../../../types';
import { ValidationStrings } from '../../../validators';
import { GameServantCostumeSchema } from './game-servant-costume.schema';
import { GameServantEnhancementSchema } from './game-servant-enhancement.schema';
import { GameServantMetadataSchema } from './game-servant-metadata.schema';
import { GameServantNoblePhantasmSchema } from './game-servant-noble-phantasm.schema';

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
 * Mongoose schema definition for the `GameServant` type.
 */
export const GameServantSchemaDefinition: SchemaDefinition<GameServant> = {
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
    gachaType: {
        type: String,
        enum: Object.keys(GameServantGachaType)
    },
    class: {
        type: String,
        enum: Object.keys(GameServantClass),
        required: true,
        default: GameServantClass.Saber,
        index: true
    },
    rarity: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 5,
        index: true
    },
    cost: {
        type: Number,
        required: true,
        min: 0,
        max: 16,
        // TODO Validate specific values
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 16,
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
        enum: Object.keys(GameServantGender),
        required: true,
        default: GameServantGender.Female
    },
    attribute: {
        type: String,
        enum: Object.keys(GameServantAttribute),
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
        default: {},
        transform: CommonTransformers.mapToObject as any
    },
    metadata: {
        type: GameServantMetadataSchema,
        required: true,
        default: {}
    }
};
