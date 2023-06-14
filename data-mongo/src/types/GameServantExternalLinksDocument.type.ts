import { Entity, GameServantMetadata } from '@fgo-planner/data-core';

/**
 * Projected version of the `GameServant` type with only `metadata.links`.
 */
export type GameServantExternalLinksDocument = Entity<number> & {
    metadata: Pick<GameServantMetadata, 'links'>;
};
