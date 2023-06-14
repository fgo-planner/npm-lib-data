import { ObjectId } from 'bson';
import mongoose, { Model, Schema } from 'mongoose';
import { GameEventSchemaDefinition } from '../../../schemas';
import { GameEventDocument, MongooseDocument } from '../../../types';


//#region Mongoose document types

export type GameEventDbDocument = MongooseDocument<ObjectId, GameEventDocument>;

//#endregion


//#region Static function implementations

/**
 * Creates a query for retrieving the events that start in the given year.
 */
function findByYear(this: Model<GameEventDocument>, year: number) {
    const startDate = new Date(year, 0);
    const endDate = new Date(year + 1, 0);
    const dateQuery = {
        $gte: startDate,
        $lt: endDate
    };
    return this.find<GameEventDbDocument>({ startDate: dateQuery });
}

//#endregion


const GameEventSchema = new Schema<GameEventDocument>(GameEventSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    findByYear
};

// Add the static properties to the schema
Object.assign(GameEventSchema.statics, Statics);

// Add additional options
GameEventSchema.set('toJSON', {
    versionKey: false
});

type GameEventModel = Model<GameEventDocument> & typeof Statics;

export const GameEventModel = mongoose.model<GameEventDocument, GameEventModel>(
    'GameEvent',
    GameEventSchema,
    'GameEvents'
);
