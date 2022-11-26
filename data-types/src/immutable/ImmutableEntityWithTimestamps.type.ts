import { Immutable, ReadonlyDate } from '@fgo-planner/common-types';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';

/**
 * Immutable version of `EntityWithTimestamps`. Replaces the `createAt` and
 * `updatedAt` properties with ones of the same name that take a `ReadonlyDate`.
 *
 * @template K Additional properties to omit.
 */
export type ImmutableEntityWithTimestamps<T extends EntityWithTimestamps<ID>, ID, K extends number | string | symbol = ''> =

    Immutable<Omit<T, 'createdAt' | 'updatedAt' | K>> & {

        createdAt?: ReadonlyDate;

        updatedAt?: ReadonlyDate;

    };
