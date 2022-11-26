import { ReadonlyDate } from '@fgo-planner/common-types';
import { Plan } from '../planner/Plan.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `Plan`.
 */
export type ImmutablePlan<ID = string> = ImmutableEntityWithTimestamps<Plan<ID>, ID, 'targetDate'> & {
    targetDate?: ReadonlyDate;
};
