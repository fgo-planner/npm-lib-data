import { BasicPlanGroup } from '../planner/basic-plan-group.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `BasicPlanGroup`.
 */
export type ImmutableBasicPlanGroup<ID = string> = ImmutableEntityWithTimestamps<BasicPlanGroup<ID>, ID>;
