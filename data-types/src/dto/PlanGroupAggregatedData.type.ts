import { Immutable } from '@fgo-planner/common-types';
import { PlanCommon } from '../planner/PlanCommon.type';
import { PlanGroup } from '../planner/PlanGroup.type';
import { BasicPlan } from './BasicPlan.type';

export type PlanGroupDetailsAggregatedData = Readonly<PlanCommon & {

    plans: Array<BasicPlan>;

}>;

export type PlanGroupAggregatedData = Immutable<Pick<PlanGroup, 'accountId'> & {

    ungroupedPlans: Array<BasicPlan>;

    groups: Array<PlanGroupDetailsAggregatedData>;

}>;
