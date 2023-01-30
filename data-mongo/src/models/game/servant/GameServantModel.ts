import { ExternalLink, GameServantClass, GameServantWithMetadata } from '@fgo-planner/data-core';
import mongoose, { Document, Model, ProjectionType, Query, Schema } from 'mongoose';
import { GameServantSchemaDefinition } from '../../../schemas';

export type GameServantDocument = GameServantWithMetadata & Document<number, any, GameServantWithMetadata>;

/**
 * Mongoose document model definition for the `GameItem` type.
 */
type GameServantModel = Model<GameServantWithMetadata> & {

    /**
     * Creates a query to find a single document by its `collectionNo` field.
     * 
     * @deprecated
     */
    // eslint-disable-next-line max-len
    findByCollectionNo: (collectionNo: number, projection?: ProjectionType<GameServantWithMetadata>) => Query<GameServantDocument, GameServantDocument>;

    /**
     * Creates a query for retrieving all the documents with the given `class` in
     * the collection.
     * 
     * @deprecated
     */
    findByClass: (servantClass: GameServantClass) => Query<Array<GameServantDocument>, GameServantDocument>;

    getExternalLinks: (id: number) => Promise<Array<ExternalLink> | null>;

    getFgoManagerNamesMap: () => Promise<Record<number, string>>;

};

//#region Static function implementations

const findByCollectionNo = function (
    this: GameServantModel,
    collectionNo: number,
    projection?: ProjectionType<GameServantWithMetadata>
): Query<GameServantDocument | null, GameServantDocument> {
    return this.findOne({ collectionNo }, projection);
};

const findByClass = function (
    this: GameServantModel,
    servantClass: GameServantClass
): Query<Array<GameServantDocument>, GameServantDocument> {
    return this.find({ class: servantClass });
};

const getExternalLinks = async function (
    this: GameServantModel,
    id: number
): Promise<Array<ExternalLink> | null> {
    const doc = await this.findById(id, { 'metadata.links': 1 });
    if (!doc) {
        return null;
    }
    return doc.metadata.links;
};

const getFgoManagerNamesMap = async function (
    this: GameServantModel
): Promise<Record<number, string>> {
    const docs = await this.find({}, { 'metadata.fgoManagerName': 1 });
    const result: Record<number, string> = {};
    for (const doc of docs) {
        const { _id, metadata } = doc.toObject();
        if (!metadata.fgoManagerName) {
            continue;
        }
        result[_id] = metadata.fgoManagerName;
    }
    return result;
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByCollectionNo,
    findByClass,
    getExternalLinks,
    getFgoManagerNamesMap
};

/**
 * Mongoose schema for the `GameServant` type.
 */
const GameServantSchema = new Schema<GameServantWithMetadata>(GameServantSchemaDefinition, {
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

export const GameServantModel = mongoose.model<GameServantWithMetadata, GameServantModel>('GameServant', GameServantSchema, 'GameServants');
