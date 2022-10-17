import { GameItemQuantities, MasterItemConstants } from '@fgo-planner/data-core';
import { SchemaTypeOptions } from 'mongoose';
import { CommonTransformers } from '../../../transformers';
import { ValidationStrings } from '../../../validators';

/**
 * Mongoose schema type options for the `GameItemQuantities` type.
 */
export const GameItemQuantitiesSchemaTypeOptions: SchemaTypeOptions<GameItemQuantities> = {
    type: Map,
    of: {
        type: Number,
        min: MasterItemConstants.MinQuantity,
        max: MasterItemConstants.MaxQuantity,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    transform: CommonTransformers.mapToObject as any
};
