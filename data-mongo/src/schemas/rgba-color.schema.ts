import { RgbaColor } from '@fgo-planner/data-core';
import { Schema, SchemaTypeOptions } from 'mongoose';
import { ValidationStrings } from '../validators';

const isValidRgbValue = function(value: number): boolean {
    return value != null && Number.isInteger(value) && value >= 0 && value <= 255;
};

/**
 * Mongoose schema type options for a RGB value.
 */
const ColorSchemaTypeOptions: SchemaTypeOptions<number> = {
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
    r: ColorSchemaTypeOptions,
    g: ColorSchemaTypeOptions,
    b: ColorSchemaTypeOptions,
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
