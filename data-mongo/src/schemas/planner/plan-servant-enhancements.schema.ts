import { PlanServantEnhancements } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../validators';

/**
 * Mongoose schema for the `PlanServantEnhancements.skills` and
 * `PlanServantEnhancements.appendSkills` properties.
 */
const PlanServantEnhancementsSkillsSchema = new Schema<PlanServantEnhancements['skills']>({
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
 * Mongoose schema for the `PlanServantEnhancements` type.
 */
export const PlanServantEnhancementsSchema = new Schema<PlanServantEnhancements>({
    level: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    ascension: {
        type: Number,
        min: 0,
        max: 4,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
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
        type: PlanServantEnhancementsSkillsSchema,
        required: true,
        default: {}
    },
    appendSkills: {
        type: PlanServantEnhancementsSkillsSchema,
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