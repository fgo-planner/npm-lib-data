import { ReadonlyDate } from '@fgo-planner/common-types';
import { Plan } from '../planner/plan.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `Plan`.
 */
export type ImmutablePlan<ID = string> = ImmutableEntityWithTimestamps<Plan<ID>, ID, 'targetDate'> & {
    targetDate?: ReadonlyDate;
};
