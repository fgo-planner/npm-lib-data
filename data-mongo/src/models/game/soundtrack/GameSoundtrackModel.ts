import { GameSoundtrack } from '@fgo-planner/data-core';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { GameSoundtrackSchemaDefinition } from '../../../schemas';
import { GameSoundtrackDocument } from '../../../types';

export type GameSoundtrackMongooseDocument = GameSoundtrackDocument & Document<number, any, GameSoundtrack>;

const GameSoundtrackSchema = new Schema<GameSoundtrack>(GameSoundtrackSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add additional options
GameSoundtrackSchema.set('toJSON', {
    versionKey: false
});

type GameSoundtrackModel = Model<GameSoundtrackDocument>;

export const GameSoundtrackModel = mongoose.model<GameSoundtrack, GameSoundtrackModel>(
    'GameSoundtrack',
    GameSoundtrackSchema,
    'GameSoundtracks'
);
