import { PlanGroup } from '../planner/plan-group.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `PlanGroup`.
 */
export type ImmutablePlanGroup<ID = string> = ImmutableEntityWithTimestamps<PlanGroup<ID>, ID>;
