import { MasterServant } from '@fgo-planner/types';
import { Schema } from 'mongoose';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `MasterServant.skills` property.
 */
const MasterServantSkillLevelsSchema = new Schema<MasterServant['skills']>({
    1: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 1
    },
    2: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    3: {
        type: Number,
        min: 1,
        max: 10,
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
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    2: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    3: {
        type: Number,
        min: 1,
        max: 10,
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
        min: 1,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 1
    },
    level: {
        type: Number,
        required: true,
        min: 1,
        max: 120,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 1
    },
    ascension: {
        type: Number,
        required: true,
        min: 0,
        max: 4,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    fouAtk: {
        type: Number,
        min: 0,
        max: 2000,
        validate: {
            validator: MasterAccountValidators.isFouValueValid,
            message: ValidationStrings.GenericInvalidValue
        }
    },
    fouHp: {
        type: Number,
        min: 0,
        max: 2000,
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
