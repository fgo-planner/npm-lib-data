import { GameServantWithMetadata } from '@fgo-planner/data-core';
import mongoose, { Model, ProjectionFields, Schema } from 'mongoose';
import { GameServantSchemaDefinition } from '../../../schemas';
import { GameServantExternalLinksDocument, GameServantFgoManagerNameDocument, GameServantSearchTagsDocument, GameServantWithMetadataDocument, MongooseDocument } from '../../../types';


//#region Mongoose document types

export type GameServantMongooseDocument = MongooseDocument<number, GameServantWithMetadataDocument>;

export type GameServantExternalLinksMongooseDocument = MongooseDocument<number, GameServantExternalLinksDocument>;

export type GameServantSearchTagsMongooseDocument = MongooseDocument<number, GameServantSearchTagsDocument>;

export type GameServantFgoManagerNameMongooseDocument = MongooseDocument<number, GameServantFgoManagerNameDocument>;

//#endregion


//#region Projections

const ExcludeMetadataProjection = {
    metadata: 0
} as const satisfies ProjectionFields<GameServantWithMetadataDocument>;

const ExternalLinksProjection = {
    metadata: {
        links: 1
    }
} as const satisfies ProjectionFields<GameServantExternalLinksDocument>;

const SearchTagsProjection = {
    metadata: {
        searchTags: 1
    }
} as const satisfies ProjectionFields<GameServantSearchTagsDocument>;

const FgoManagerNameProjection = {
    metadata: {
        fgoManagerName: 1
    }
} as const satisfies ProjectionFields<GameServantFgoManagerNameDocument>;

//#endregion


//#region Static function implementations

function findExternalLinksById(this: Model<GameServantWithMetadataDocument>, id: number) {
    return this.findById<GameServantExternalLinksMongooseDocument>(id, ExternalLinksProjection);
}

async function findSearchTags(this: Model<GameServantWithMetadataDocument>) {
    return this.find<GameServantSearchTagsMongooseDocument>({}, SearchTagsProjection);
}

async function findFgoManagerNames(this: Model<GameServantWithMetadataDocument>) {
    return this.find<GameServantFgoManagerNameMongooseDocument>({}, FgoManagerNameProjection);
}

//#endregion


const GameServantSchema = new Schema<GameServantWithMetadata>(GameServantSchemaDefinition, {
    timestamps: true,
    minimize: false
});

const Statics = {
    ExcludeMetadataProjection,
    findExternalLinksById,
    findSearchTags,
    findFgoManagerNames
};

// Add the static properties to the schema
Object.assign(GameServantSchema.statics, Statics);

// Add additional options
GameServantSchema.set('toJSON', {
    versionKey: false
});

type GameServantModel = Model<GameServantWithMetadataDocument> & typeof Statics;

export const GameServantModel = mongoose.model<GameServantWithMetadata, GameServantModel>(
    'GameServant',
    GameServantSchema,
    'GameServants'
);
