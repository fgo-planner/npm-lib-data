import { MasterCostumes } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';

/**
 * Mongoose schema for the `MasterCostumes` type.
 */
export const MasterCostumesSchema = new Schema<MasterCostumes>({
    unlocked: {
        type: [Number],
        required: true,
        default: []
    },
    noCostUnlock: {
        type: [Number],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
