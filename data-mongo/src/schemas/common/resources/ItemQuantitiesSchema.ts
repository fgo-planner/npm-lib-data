import { ItemQuantities, MasterItemConstants } from '@fgo-planner/data-core';
import { SchemaTypeOptions } from 'mongoose';
import { CommonValidators, ValidationStrings } from '../../../validators';
import { CommonTransformers } from '../../../transformers';

/**
 * Mongoose schema type options for the `ItemQuantities` type.
 */
export const ItemQuantitiesSchemaTypeOptions: SchemaTypeOptions<ItemQuantities> = {
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
