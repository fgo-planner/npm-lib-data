import { GameItemQuantities, MasterItemConstants } from '@fgo-planner/data-core';
import { SchemaTypeOptions } from 'mongoose';
import { CommonTransformers } from '../../../transformers';
import { CommonValidators, ValidationStrings } from '../../../validators';

/**
 * Mongoose schema type options for the `GameItemQuantities` type.
 */
export const GameItemQuantitiesSchemaTypeOptions: SchemaTypeOptions<GameItemQuantities> = {
    type: Map,
    of: {
        type: Number
    },
    validate: [
        {
            validator: CommonValidators.mapIntegerKeysValidator(0),
            message: ValidationStrings.GenericInvalidKeyPathOnly
        },
        {
            validator: CommonValidators.mapIntegerValuesValidator(
                MasterItemConstants.MinQuantity,
                MasterItemConstants.MaxQuantity
            ),
            message: ValidationStrings.GenericInvalidValuePathOnly
        },
    ],
    transform: CommonTransformers.mapToObject as any
};
