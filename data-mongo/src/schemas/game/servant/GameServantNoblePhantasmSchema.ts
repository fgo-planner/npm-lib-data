import { GameServantCardType, GameServantNoblePhantasm, GameServantNoblePhantasmTarget } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';

/**
 * Mongoose schema for the `GameServantNoblePhantasm` type.
 */
export const GameServantNoblePhantasmSchema = new Schema<GameServantNoblePhantasm>({
    cardType: {
        type: String,
        enum: Object.values(GameServantCardType),
        required: true,
        default: GameServantCardType.Arts
    },
    target: {
        type: String,
        enum: Object.values(GameServantNoblePhantasmTarget),
        required: true,
        default: GameServantNoblePhantasmTarget.Support
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
