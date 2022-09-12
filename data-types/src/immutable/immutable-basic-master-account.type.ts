import { BasicMasterAccount } from '../master/account/basic-master-account.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';

/**
 * Immutable version of `BasicMasterAccount`.
 */
export type ImmutableBasicMasterAccount<ID = string> = ImmutableEntityWithTimestamps<BasicMasterAccount<ID>, ID>;
