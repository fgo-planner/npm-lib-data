import { RgbaColor } from '@fgo-planner/types';
import { Schema, SchemaDefinitionProperty } from 'mongoose';
import { ValidationStrings } from '../validators';

const isValidRgbValue = function(value: number): boolean {
    return value != null && Number.isInteger(value) && value >= 0 && value <= 255;
};

/**
 * Mongoose schema definition property for a RGB value.
 */
const ColorSchemaDefinitionProperty: SchemaDefinitionProperty = {
    type: Number,
    required: true,
    validate: {
        validator: isValidRgbValue,
        message: ValidationStrings.RgbColorValue
    },
    default: 0
};

/**
 * Mongoose schema for the `RgbaColor` type.
 */
export const RgbaColorSchema = new Schema<RgbaColor>({
    r: ColorSchemaDefinitionProperty,
    g: ColorSchemaDefinitionProperty,
    b: ColorSchemaDefinitionProperty,
    a: {
        type: Number,
        required: true,
        min: 0,
        max: 1,
        default: 1.0
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
