import { Immutable } from '@fgo-planner/common-types';
import { InstantiatedServant } from '../common/servant/InstantiatedServant.type';
import { GameServant } from '../game/servant/GameServant.type';
import { ImmutableMasterServant } from '../immutable/ImmutableMasterServant.type';

/**
 * DTO containing a `MasterServant` object, as well as the instance ID and the
 * source `GameServant` object.
 */
export type MasterServantAggregatedData<T extends GameServant = GameServant> = Readonly<InstantiatedServant & {

    masterServant: ImmutableMasterServant;

    gameServant: Immutable<T>;

}>;
