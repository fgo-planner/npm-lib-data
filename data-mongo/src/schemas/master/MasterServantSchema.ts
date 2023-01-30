import { InstantiatedServantConstants, MasterServant } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { ValidationStrings } from '../../validators';
import { InstantiatedServantAscensionLevelSchemaTypeOptions, InstantiatedServantFouSchemaTypeOptions, InstantiatedServantIdSchemaTypeOptions, InstantiatedServantLevelSchemaTypeOptions, InstantiatedServantNoblePhantasmLevelSchemaTypeOptions, InstantiatedServantSkillLevelSchemaTypeOptions } from '../common/servant/InstantiatedServantSchema';

/**
 * Mongoose schema for the `MasterServant.skills` property.
 */
const MasterServantSkillsSchema = new Schema<MasterServant['skills']>({
    1: {
        ...InstantiatedServantSkillLevelSchemaTypeOptions,
        required: true,
        default: InstantiatedServantConstants.MinSkillLevel
    },
    2: InstantiatedServantSkillLevelSchemaTypeOptions,
    3: InstantiatedServantSkillLevelSchemaTypeOptions
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `MasterServant.appendSkills` property.
 */
const MasterServantAppendSkillsSchema = new Schema<MasterServant['appendSkills']>({
    1: InstantiatedServantSkillLevelSchemaTypeOptions,
    2: InstantiatedServantSkillLevelSchemaTypeOptions,
    3: InstantiatedServantSkillLevelSchemaTypeOptions
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `MasterServant` type.
 */
export const MasterServantSchema = new Schema<MasterServant>({
    instanceId: InstantiatedServantIdSchemaTypeOptions,
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
    np: InstantiatedServantNoblePhantasmLevelSchemaTypeOptions,
    level: {
        ...InstantiatedServantLevelSchemaTypeOptions,
        required: true,
        default: InstantiatedServantConstants.MinLevel
    },
    ascension: {
        ...InstantiatedServantAscensionLevelSchemaTypeOptions,
        required: true,
        default: InstantiatedServantConstants.MinAscensionLevel
    },
    fouAtk: InstantiatedServantFouSchemaTypeOptions,
    fouHp: InstantiatedServantFouSchemaTypeOptions,
    skills: {
        type: MasterServantSkillsSchema,
        required: true,
        default: {}
    },
    appendSkills: {
        type: MasterServantAppendSkillsSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
