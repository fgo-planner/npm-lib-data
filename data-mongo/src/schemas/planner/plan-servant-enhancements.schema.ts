import { MasterServantConstants, PlanServantEnhancements } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../validators';

/**
 * Mongoose schema for the `PlanServantEnhancements.skills` and
 * `PlanServantEnhancements.appendSkills` properties.
 */
const PlanServantEnhancementsSkillLevelsSchema = new Schema<PlanServantEnhancements['skills']>({
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
 * Mongoose schema for the `PlanServantEnhancements` type.
 */
export const PlanServantEnhancementsSchema = new Schema<PlanServantEnhancements>({
    level: {
        type: Number,
        min: MasterServantConstants.MinLevel,
        max: MasterServantConstants.MaxLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    ascension: {
        type: Number,
        min: MasterServantConstants.MinLevel,
        max: MasterServantConstants.MaxLevel,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
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
        type: PlanServantEnhancementsSkillLevelsSchema,
        required: true,
        default: {}
    },
    appendSkills: {
        type: PlanServantEnhancementsSkillLevelsSchema,
        required: true,
        default: {}
    },
    costumes: {
        type: [Number],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});