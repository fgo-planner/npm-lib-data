import { Immutable } from '@fgo-planner/common-types';
import { GameServant } from '../game/servant/GameServant.type';
import { PlanServant } from '../planner/PlanServant.type';
import { MasterServantAggregatedData } from './MasterServantAggregatedData.type';

/**
 * DTO containing a `PlanServant` object, as well as the instance ID and the
 * source `MasterServant` and `GameServant` objects.
 */
export type PlanServantAggregatedData<T extends GameServant = GameServant> = MasterServantAggregatedData<T> & {

    readonly planServant: Immutable<PlanServant>;

};
