import { PlanCommon } from '../planner/PlanCommon.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `PlanCommon`.
 */
export type ImmutablePlanCommon<ID = string> = ImmutableEntityWithTimestamps<PlanCommon<ID>, ID>;
