import { Entity, GameServantMetadata } from '@fgo-planner/data-core';

/**
 * Projected version of the `GameServant` type with only `metadata.fgoManagerName`.
 */
export type GameServantFgoManagerNameDocument = Entity<number> & {
    metadata: Pick<GameServantMetadata, 'fgoManagerName'>;
};
