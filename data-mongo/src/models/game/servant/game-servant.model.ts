import { GameServant, GameServantClass } from '@fgo-planner/data-core';
import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { GameServantSchemaDefinition } from '../../../schemas';

export type GameServantDocument = GameServant & Document<number, any, GameServant>;

/**
 * Mongoose document model definition for the `GameItem` type.
 */
type GameServantModel = Model<GameServant> & {

    /**
     * Creates a query to find a single document by its `collectionNo` field.
     */
    findByCollectionNo: (collectionNo: number) => Query<GameServantDocument, GameServantDocument>;

    /**
     * Creates a query for retrieving all the documents with the given `class` in
     * the collection.
     */
    findByClass: (servantClass: GameServantClass) => Query<Array<GameServantDocument>, GameServantDocument>;

};

//#region Static function implementations

const findByCollectionNo = function (
    this: GameServantModel,
    collectionNo: number
): Query<GameServantDocument | null, GameServantDocument> {
    return this.findOne({ collectionNo });
};

const findByClass = function (
    this: GameServantModel,
    servantClass: GameServantClass
): Query<Array<GameServantDocument>, GameServantDocument> {
    return this.find({ class: servantClass });
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByCollectionNo,
    findByClass
};

/**
 * Mongoose schema for the `GameServant` type.
 */
const GameServantSchema = new Schema<GameServant>(GameServantSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(GameServantSchema.statics, Statics);

GameServantSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

// Add text index
// TODO Redo this
/*
GameServantSchema.index(
    GameObjectSchemaTextIndex,
    {
        name: 'textIndex',
        weights: {
            urlPath: 5,
            name: 5,
            nameJp: 3,
        }
    }
);
*/

export const GameServantModel = mongoose.model<GameServant, GameServantModel>('GameServant', GameServantSchema, 'GameServants');
