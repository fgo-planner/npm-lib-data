import { Entity, GameServantMetadata } from '@fgo-planner/data-core';

/**
 * Projected version of the `GameServant` type with only `metadata.searchTags`.
 */
export type GameServantSearchTagsDocument = Entity<number> & {
    metadata: Pick<GameServantMetadata, 'searchTags'>;
};
