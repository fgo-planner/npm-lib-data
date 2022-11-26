import { BasicPlanGroup } from '../dto/BasicPlanGroup.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `BasicPlanGroup`.
 */
export type ImmutableBasicPlanGroup<ID = string> = ImmutableEntityWithTimestamps<BasicPlanGroup<ID>, ID>;
