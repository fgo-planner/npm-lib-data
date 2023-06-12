import { GameItemUsage } from '@fgo-planner/data-core';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { GameItemDocument } from '../../../types';
import { GameItemSchemaDefinition } from '../../../schemas';


//#region Mongoose document types

export type GameItemDbDocument = GameItemDocument & Document<number, any, GameItemDocument>;

//#endregion


//#region Static function implementations

/**
 * Creates a query for retrieving the items that belong to any of the given
 * usages from the collection.
 */
function findByUsage(this: Model<GameItemDocument>, usage: GameItemUsage | Array<GameItemUsage>) {
    if (!Array.isArray(usage)) {
        usage = [usage];
    }
    return this.find<GameItemDbDocument>({ uses: { $in: usage } });
}

//#endregion


const GameItemSchema = new Schema<GameItemDocument>(GameItemSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    findByUsage
};

// Add the static properties to the schema
Object.assign(GameItemSchema.statics, Statics);

// Add additional options
GameItemSchema.set('toJSON', {
    versionKey: false
});

type GameItemModel = Model<GameItemDocument> & typeof Statics;

export const GameItemModel = mongoose.model<GameItemDocument, GameItemModel>(
    'GameItem',
    GameItemSchema,
    'GameItems'
);
