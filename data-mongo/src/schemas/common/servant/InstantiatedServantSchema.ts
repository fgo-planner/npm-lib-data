import { InstantiatedServantAscensionLevel, InstantiatedServantConstants, InstantiatedServantNoblePhantasmLevel, InstantiatedServantSkillLevel } from '@fgo-planner/data-core';
import { SchemaTypeOptions } from 'mongoose';
import { CommonValidators, InstantiatedServantValidators, ValidationStrings } from '../../../validators';

export const InstantiatedServantIdSchemaTypeOptions: SchemaTypeOptions<number> = {
    type: Number,
    required: true,
    validate: {
        validator: Number.isInteger,
        message: ValidationStrings.NumberInteger
    }
};

export const InstantiatedServantNoblePhantasmLevelSchemaTypeOptions: SchemaTypeOptions<InstantiatedServantNoblePhantasmLevel> = {
    type: Number,
    min: InstantiatedServantConstants.MinNoblePhantasmLevel,
    max: InstantiatedServantConstants.MaxNoblePhantasmLevel,
    validate: {
        validator: Number.isInteger,
        message: ValidationStrings.NumberInteger
    }
};

export const InstantiatedServantLevelSchemaTypeOptions: SchemaTypeOptions<number> = {
    type: Number,
    min: InstantiatedServantConstants.MinLevel,
    max: InstantiatedServantConstants.MaxLevel,
    validate: {
        validator: Number.isInteger,
        message: ValidationStrings.NumberInteger
    }
};

export const InstantiatedServantAscensionLevelSchemaTypeOptions: SchemaTypeOptions<InstantiatedServantAscensionLevel> = {
    type: Number,
    min: InstantiatedServantConstants.MinAscensionLevel,
    max: InstantiatedServantConstants.MaxAscensionLevel,
    validate: {
        validator: Number.isInteger,
        message: ValidationStrings.NumberInteger
    }
};

export const InstantiatedServantFouSchemaTypeOptions: SchemaTypeOptions<number> = {
    type: Number,
    min: InstantiatedServantConstants.MinFou,
    max: InstantiatedServantConstants.MaxFou,
    validate: {
        validator: InstantiatedServantValidators.isFouValueValid,
        message: ValidationStrings.GenericInvalidValue
    }
};

export const InstantiatedServantSkillLevelSchemaTypeOptions: SchemaTypeOptions<InstantiatedServantSkillLevel> = {
    type: Number,
    min: InstantiatedServantConstants.MinSkillLevel,
    max: InstantiatedServantConstants.MaxSkillLevel,
    validate: {
        validator: CommonValidators.isNullOrInteger,
        message: ValidationStrings.NumberInteger
    }
};
