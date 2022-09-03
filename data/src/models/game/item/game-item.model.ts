import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { GameItemSchemaDefinition } from '../../../schemas';
import { GameItem, GameItemUsage } from '../../../types';

export type GameItemDocument = GameItem & Document<number, any, GameItem>;

/**
 * Mongoose document model definition for the `GameItem` type.
 */
type GameItemModel = Model<GameItem> & {

    /**
     * Creates a query for retrieving the items that belong to any of the given
     * usages from the collection.
     */
    findByUsage: (usage: GameItemUsage | GameItemUsage[]) => Query<Array<GameItemDocument>, GameItemDocument>;

};

//#region Static function implementations

const findByUsage = function (
    this: GameItemModel,
    usage: GameItemUsage | Array<GameItemUsage>
): Query<Array<GameItemDocument>, GameItemDocument> {
    if (!Array.isArray(usage)) {
        usage = [usage];
    }
    return this.find({ uses: { $in: usage } });
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByUsage
};

/**
 * Mongoose schema for the `GameItem` type.
 */
const GameItemSchema = new Schema<GameItem>(GameItemSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(GameItemSchema.statics, Statics);

GameItemSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const GameItemModel = mongoose.model<GameItem, GameItemModel>('GameItem', GameItemSchema, 'GameItems');
