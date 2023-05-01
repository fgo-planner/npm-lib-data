import { PlanUpcomingResources } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { ResourcesSchemaDefinition } from '../common/resources/ResourcesSchema';

/**
 * Mongoose schema for the `PlanUpcomingResources` type.
 */
export const PlanUpcomingResourcesSchema = new Schema<PlanUpcomingResources>({
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
