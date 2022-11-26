import { PlanGroup } from '../planner/PlanGroup.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `PlanGroup`.
 */
export type ImmutablePlanGroup<ID = string> = ImmutableEntityWithTimestamps<PlanGroup<ID>, ID>;
