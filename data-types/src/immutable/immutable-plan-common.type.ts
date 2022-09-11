import { PlanCommon } from '../planner/plan-common.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `PlanCommon`.
 */
export type ImmutablePlanCommon<ID = string> = ImmutableEntityWithTimestamps<PlanCommon<ID>, ID>;
