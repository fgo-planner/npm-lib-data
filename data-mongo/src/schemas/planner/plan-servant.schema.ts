import { PlanServant } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { InstantiatedServantAscensionLevelSchemaTypeOptions, InstantiatedServantFouSchemaTypeOptions, InstantiatedServantIdSchemaTypeOptions, InstantiatedServantLevelSchemaTypeOptions, InstantiatedServantSkillLevelSchemaTypeOptions } from '../common/servant/instantiated-servant.schema';

/**
 * Mongoose schema for the `PlanServant.enabled` property.
 */
export const PlanServantEnabledSchema = new Schema<PlanServant['enabled']>({
    servant: {
        type: Boolean,
        required: true,
        default: true
    },
    ascensions: {
        type: Boolean,
        required: true,
        default: true
    },
    skills: {
        type: Boolean,
        required: true,
        default: true
    },
    appendSkills: {
        type: Boolean,
        required: true,
        default: true
    },
    costumes: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `PlanServant.skills` property.
 */
const PlanServantSkillsSchema = new Schema<PlanServant['skills']>({
    1: InstantiatedServantSkillLevelSchemaTypeOptions,
    2: InstantiatedServantSkillLevelSchemaTypeOptions,
    3: InstantiatedServantSkillLevelSchemaTypeOptions
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `PlanServant.appendSkills` property.
 */
const PlanServantAppendSkillsSchema = new Schema<PlanServant['appendSkills']>({
    1: InstantiatedServantSkillLevelSchemaTypeOptions,
    2: InstantiatedServantSkillLevelSchemaTypeOptions,
    3: InstantiatedServantSkillLevelSchemaTypeOptions
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `PlanServant` type.
 */
export const PlanServantSchema = new Schema<PlanServant>({
    instanceId: InstantiatedServantIdSchemaTypeOptions,
    enabled: {
        type: PlanServantEnabledSchema,
        required: true,
        default: {}
    },
    level: InstantiatedServantLevelSchemaTypeOptions,
    ascension: InstantiatedServantAscensionLevelSchemaTypeOptions,
    fouAtk: InstantiatedServantFouSchemaTypeOptions,
    fouHp: InstantiatedServantFouSchemaTypeOptions,
    skills: {
        type: PlanServantSkillsSchema,
        required: true,
        default: {}
    },
    appendSkills: {
        type: PlanServantAppendSkillsSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
