import { Immutable } from '@fgo-planner/common-types';
import { GameServant } from '../game/servant/GameServant.type';
import { GameServantCostume } from '../game/servant/GameServantCostume.type';

/**
 * DTO containing a `GameServantCostume` object, as well as the costume ID and
 * the source `GameServant` object.
 */
export type GameServantCostumeAggregatedData<T extends GameServant = GameServant> = Immutable<{

    /**
     * Not the same as `collectionNo`.
     */
    costumeId: number;

    /**
     * Whether the costume is always unlocked by default (has no unlock materials).
     */
    alwaysUnlocked: boolean;

    costume: GameServantCostume;
    
    gameServant: T;

}>;
