import { PlanResources } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { ResourcesSchemaDefinition } from '../common/resources/ResourcesSchema';

/**
 * Mongoose schema for the `PlanResources` type.
 */
export const PlanResourcesSchema = new Schema<PlanResources>({
    ...ResourcesSchemaDefinition,
    name: {
        type: String,
        required: true,
        default: ''
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
