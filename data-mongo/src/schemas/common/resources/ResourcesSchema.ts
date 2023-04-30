import { MasterAccountConstants, Resources } from '@fgo-planner/data-core';
import { Schema, SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../../../validators';
import { EmberQuantitiesSchema } from './EmberQuantitiesSchema';
import { ItemQuantitiesSchemaTypeOptions } from './ItemQuantitiesSchema';

/**
 * Mongoose schema definition for the `Resources` type.
 */
export const ResourcesSchemaDefinition: SchemaDefinition<Resources> = {
    items: {
        ...ItemQuantitiesSchemaTypeOptions,
        required: true,
        default: {}
    },
    embers: {
        type: EmberQuantitiesSchema,
        required: true,
        default: {}
    },
    qp: {
        type: Number,
        required: true,
        min: MasterAccountConstants.MinQp,
        max: MasterAccountConstants.MaxQp,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: MasterAccountConstants.MinQp
    }
};

/**
 * Mongoose schema for the `Resources` type.
 */
export const ResourcesSchema = new Schema<Resources>(ResourcesSchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
