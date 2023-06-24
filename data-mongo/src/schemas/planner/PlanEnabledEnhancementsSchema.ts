import { PlanEnabledEnhancements } from '@fgo-planner/data-core';
import { Schema, SchemaDefinition } from 'mongoose';

/**
 * Mongoose schema definition for the `PlanEnabledEnhancements` type.
 */
export const PlanEnabledEnhancementsSchemaDefinition: SchemaDefinition<PlanEnabledEnhancements> = {
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
};

/**
 * Mongoose schema for the `PlanEnabledEnhancements` type.
 */
export const PlanEnabledEnhancementsSchema = new Schema<PlanEnabledEnhancements>(PlanEnabledEnhancementsSchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
