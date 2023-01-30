import { PlanUpcomingResources } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { ValidationStrings } from '../../validators';
import { EmberQuantitiesSchema } from '../common/ember/EmberQuantitiesSchema';
import { ItemQuantitiesSchemaTypeOptions } from '../common/item/ItemQuantitiesSchema';

/**
 * Mongoose schema for the `PlanUpcomingResources` type.
 */
export const PlanUpcomingResourcesSchema = new Schema<PlanUpcomingResources>({
    name: {
        type: String,
        required: true,
        default: ''
    },
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
        min: 0,
        max: 2000000000, // TODO Define this as a constant
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
