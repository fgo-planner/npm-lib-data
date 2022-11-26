import { BasicMasterAccount } from '../dto/BasicMasterAccount.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';

/**
 * Immutable version of `BasicMasterAccount`.
 */
export type ImmutableBasicMasterAccount<ID = string> = ImmutableEntityWithTimestamps<BasicMasterAccount<ID>, ID>;
