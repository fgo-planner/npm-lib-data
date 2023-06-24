import { PlanServant, PlanServantEnabledEnhancements } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { InstantiatedServantAscensionLevelSchemaTypeOptions, InstantiatedServantFouSchemaTypeOptions, InstantiatedServantIdSchemaTypeOptions, InstantiatedServantLevelSchemaTypeOptions, InstantiatedServantSkillLevelSchemaTypeOptions } from '../common/servant/InstantiatedServantSchema';
import { PlanEnabledEnhancementsSchemaDefinition } from './PlanEnabledEnhancementsSchema';

/**
 * Mongoose schema for the `PlanServantEnabledEnhancements` type.
 */
export const PlanServantEnabledEnhancementsSchema = new Schema<PlanServantEnabledEnhancements>({
    servant: {
        type: Boolean,
        required: true,
        default: true
    },
    ...PlanEnabledEnhancementsSchemaDefinition
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
        type: PlanServantEnabledEnhancementsSchema,
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
