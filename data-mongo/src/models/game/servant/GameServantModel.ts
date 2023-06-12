import { GameServantMetadata, GameServantWithMetadata } from '@fgo-planner/data-core';
import mongoose, { Document, Model, ProjectionFields, Schema } from 'mongoose';
import { GameServantSchemaDefinition } from '../../../schemas';
import { GameServantWithMetadataDocument } from '../../../types';


//#region Projections

const ExcludeMetadataProjection = {
    metadata: 0
} as const satisfies ProjectionFields<GameServantWithMetadataDocument>;

type ExternalLinksDocument = Pick<GameServantWithMetadataDocument, '_id'> & {
    metadata: Pick<GameServantMetadata, 'links'>;
};

const ExternalLinksProjection = {
    metadata: {
        links: 1
    }
} as const satisfies ProjectionFields<ExternalLinksDocument>;

type SearchTagsDocument = Pick<GameServantWithMetadataDocument, '_id'> & {
    metadata: Pick<GameServantMetadata, 'searchTags'>;
};

const SearchTagsProjection = {
    metadata: {
        searchTags: 1
    }
} as const satisfies ProjectionFields<SearchTagsDocument>;

type FgoManagerNameDocument = Pick<GameServantWithMetadataDocument, '_id'> & {
    metadata: Pick<GameServantMetadata, 'fgoManagerName'>;
};

const FgoManagerNameProjection = {
    metadata: {
        fgoManagerName: 1
    }
} as const satisfies ProjectionFields<FgoManagerNameDocument>;

//#endregion


//#region Mongoose document types

export type GameServantDbDocument = GameServantWithMetadataDocument & Document<number, any, GameServantWithMetadataDocument>;

type ExternalLinksDbDocument = ExternalLinksDocument & Document<number, any, ExternalLinksDocument>;

type SearchTagsDbDocument = SearchTagsDocument & Document<number, any, SearchTagsDocument>;

type FgoManagerNameDbDocument = FgoManagerNameDocument & Document<number, any, FgoManagerNameDocument>;

//#endregion


//#region Static function implementations

function findExternalLinksById(this: Model<GameServantWithMetadataDocument>, id: number) {
    return this.findById<ExternalLinksDbDocument>(id, ExternalLinksProjection);
}

async function findSearchTags(this: Model<GameServantWithMetadataDocument>) {
    return this.find<SearchTagsDbDocument>({}, SearchTagsProjection);
}

async function findFgoManagerNames(this: Model<GameServantWithMetadataDocument>) {
    return this.find<FgoManagerNameDbDocument>({}, FgoManagerNameProjection);
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
