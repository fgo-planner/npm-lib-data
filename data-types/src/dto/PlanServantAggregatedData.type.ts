import { Immutable } from '@fgo-planner/common-types';
import { PlanServant } from '../planner/PlanServant.type';
import { MasterServantAggregatedData } from './MasterServantAggregatedData.type';

/**
 * DTO containing a `PlanServant` object, as well as the instance ID and the
 * source `MasterServant` and `GameServant` objects.
 */
export type PlanServantAggregatedData = MasterServantAggregatedData & Immutable<{

    planServant: PlanServant;

}>;
