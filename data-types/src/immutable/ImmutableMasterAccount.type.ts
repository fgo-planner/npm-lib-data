import { MasterAccount } from '../master/MasterAccount.type';
import { ImmutableEntityWithTimestamps } from './ImmutableEntityWithTimestamps.type';
import { ImmutableMasterServants } from './ImmutableMasterServants.type';

/**
 * Immutable version of `MasterAccount`.
 */
export type ImmutableMasterAccount<ID = string> = ImmutableEntityWithTimestamps<MasterAccount<ID>, ID, 'servants'> & {
    servants: ImmutableMasterServants;
};
