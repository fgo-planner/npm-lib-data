import { MasterSoundtracks } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';

/**
 * Mongoose schema for the `MasterSoundtracks` type.
 */
export const MasterSoundtracksSchema = new Schema<MasterSoundtracks>({
    unlocked: {
        type: [Number],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
