import { Immutable } from '@fgo-planner/common-types';
import { MasterServant } from '../master/MasterServant.type';
import { InstantiatedServant } from '../common/servant/InstantiatedServant.type';
import { GameServant } from '../game/servant/GameServant.type';

/**
 * DTO containing a `MasterServant` object, as well as the instance ID and the
 * source `GameServant` object.
 */
export type MasterServantAggregatedData = Immutable<InstantiatedServant & {

    masterServant: MasterServant;

    gameServant: GameServant;

}>;
