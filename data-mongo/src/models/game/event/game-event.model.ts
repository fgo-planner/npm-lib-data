import { ObjectId } from 'bson';
import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { GameEventSchemaDefinition } from '../../../schemas';
import { GameEvent } from '../../../types';

export type GameEventDocument = GameEvent & Document<ObjectId, any, GameEvent>;

/**
 * Mongoose document model definition for the `GameEvent` type.
 */
type GameEventModel = Model<GameEvent> & {

    /**
     * Creates a query for retrieving the events that start in the given year.
     */
    findByYear: (year: number) => Query<Array<GameEventDocument>, GameEventDocument>;

};

//#region Static function implementations

const findByYear = function (
    this: GameEventModel,
    year: number
): Query<Array<GameEventDocument>, GameEventDocument> {
    const startDate = new Date(year, 0);
    const endDate = new Date(year + 1, 0);
    const dateQuery = {
        $gte: startDate,
        $lt: endDate
    };
    return this.find({ startDate: dateQuery });
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByYear
};

/**
 * Mongoose schema for the `GameEvent` type.
 */
const GameEventSchema = new Schema<GameEvent>(GameEventSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(GameEventSchema.statics, Statics);

GameEventSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const GameEventModel = mongoose.model<GameEvent, GameEventModel>('GameEvent', GameEventSchema, 'GameEvents');
