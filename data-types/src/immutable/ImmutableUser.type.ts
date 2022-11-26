import { User } from '../user/User.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `User`.
 */
export type ImmutableUser<ID = string> = ImmutableEntityWithTimestamps<User<ID>, ID>;
