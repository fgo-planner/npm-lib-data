import { User } from '../user/user.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `User`.
 */
export type ImmutableUser<ID = string> = ImmutableEntityWithTimestamps<User<ID>, ID>;
