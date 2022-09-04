import { GameServantCardType, GameServantNoblePhantasm, GameServantNoblePhantasmTarget } from '@fgo-planner/data-types';
import { Schema } from 'mongoose';

/**
 * Mongoose schema for the `GameServantNoblePhantasm` type.
 */
export const GameServantNoblePhantasmSchema = new Schema<GameServantNoblePhantasm>({
    cardType: {
        type: String,
        enum: Object.keys(GameServantCardType),
        required: true,
        default: GameServantCardType.Arts
    },
    target: {
        type: String,
        enum: Object.keys(GameServantNoblePhantasmTarget),
        required: true,
        default: GameServantNoblePhantasmTarget.Support
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
