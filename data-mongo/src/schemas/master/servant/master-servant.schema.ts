import { MasterServant, MasterServantConstants } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `MasterServant.skills` property.
 */
const MasterServantSkillLevelsSchema = new Schema<MasterServant['skills']>({
    1: {
        type: Number,
        required: true,
        min: MasterServantConstants.MinSkillLevel,
        max: MasterServantConstants.MaxSkillLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        },
        default: MasterServantConstants.MinSkillLevel
    },
    2: {
        type: Number,
        min: MasterServantConstants.MinSkillLevel,
        max: MasterServantConstants.MaxSkillLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    3: {
        type: Number,
        min: MasterServantConstants.MinSkillLevel,
        max: MasterServantConstants.MaxSkillLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `MasterServant.appendSkills` property.
 */
const MasterServantAppendSkillLevelsSchema = new Schema<MasterServant['appendSkills']>({
    1: {
        type: Number,
        min: MasterServantConstants.MinSkillLevel,
        max: MasterServantConstants.MaxSkillLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    2: {
        type: Number,
        min: MasterServantConstants.MinSkillLevel,
        max: MasterServantConstants.MaxSkillLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    3: {
        type: Number,
        min: MasterServantConstants.MinSkillLevel,
        max: MasterServantConstants.MaxSkillLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `MasterServant` type.
 */
export const MasterServantSchema = new Schema<MasterServant>({
    instanceId: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    gameId: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    summoned: {
        type: Boolean,
        required: true,
        default: true
    },
    summonDate: {
        type: Date
        // TODO Add range validation
    },
    np: {
        type: Number,
        required: true,
        min: MasterServantConstants.MinNoblePhantasmLevel,
        max: MasterServantConstants.MaxNoblePhantasmLevel,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: MasterServantConstants.MinNoblePhantasmLevel
    },
    level: {
        type: Number,
        required: true,
        min: MasterServantConstants.MinLevel,
        max: MasterServantConstants.MaxLevel,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: MasterServantConstants.MinLevel
    },
    ascension: {
        type: Number,
        required: true,
        min: MasterServantConstants.MinAscensionLevel,
        max: MasterServantConstants.MaxAscensionLevel,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: MasterServantConstants.MinAscensionLevel
    },
    fouAtk: {
        type: Number,
        min: MasterServantConstants.MinFou,
        max: MasterServantConstants.MaxFou,
        validate: {
            validator: MasterAccountValidators.isFouValueValid,
            message: ValidationStrings.GenericInvalidValue
        }
    },
    fouHp: {
        type: Number,
        min: MasterServantConstants.MinFou,
        max: MasterServantConstants.MaxFou,
        validate: {
            validator: MasterAccountValidators.isFouValueValid,
            message: ValidationStrings.GenericInvalidValue
        }
    },
    skills: {
        type: MasterServantSkillLevelsSchema,
        required: true,
        default: {}
    },
    appendSkills: {
        type: MasterServantAppendSkillLevelsSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
