import { OmitEntityWithTimestampsProps } from '../OmitEntityWithTimestampsProps.type';
import { PlanGrouping } from '../planner/PlanGrouping.type';
import { BasicPlan } from './BasicPlan.type';

export type PlanGroupingAggregatedData = OmitEntityWithTimestampsProps<PlanGrouping<string, BasicPlan>>;
