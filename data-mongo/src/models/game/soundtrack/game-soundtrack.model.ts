import { GameSoundtrack } from '@fgo-planner/data-core';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { GameSoundtrackSchemaDefinition } from '../../../schemas';

export type GameSoundtrackDocument = GameSoundtrack & Document<number, any, GameSoundtrack>;

/**
 * Mongoose document model definition for the `GameSoundtrack` type.
 */
type GameSoundtrackModel = Model<GameSoundtrack>;

/**
 * Mongoose schema for the `GameSoundtrack` type.
 */
const GameSoundtrackSchema = new Schema<GameSoundtrack>(GameSoundtrackSchemaDefinition, {
    timestamps: true,
    minimize: false
});

GameSoundtrackSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const GameSoundtrackModel = mongoose.model<GameSoundtrack, GameSoundtrackModel>('GameSoundtrack', GameSoundtrackSchema, 'GameSoundtracks');
