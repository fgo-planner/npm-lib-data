import { MasterAccount } from '../master/account/master-account.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `MasterAccount`.
 */
export type ImmutableMasterAccount<ID = string> = ImmutableEntityWithTimestamps<MasterAccount<ID>, ID>;
