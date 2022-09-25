import { ReadonlyDate } from '@fgo-planner/common-types';
import { BasicPlan } from '../dto/basic-plan.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `BasicPlan`.
 */
export type ImmutableBasicPlan<ID = string> = ImmutableEntityWithTimestamps<BasicPlan<ID>, ID, 'targetDate'> & {
    targetDate?: ReadonlyDate;
};
