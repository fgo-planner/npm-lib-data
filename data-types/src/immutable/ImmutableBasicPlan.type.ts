import { ReadonlyDate } from '@fgo-planner/common-types';
import { BasicPlan } from '../dto/BasicPlan.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `BasicPlan`.
 */
export type ImmutableBasicPlan<ID = string> = ImmutableEntityWithTimestamps<BasicPlan<ID>, ID, 'targetDate'> & {
    targetDate?: ReadonlyDate;
};
