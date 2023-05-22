import { PlanList } from '../planner/PlanList.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `PlanList`.
 */
export type ImmutablePlanList<ID = string> = ImmutableEntityWithTimestamps<PlanList<ID>, ID>;
