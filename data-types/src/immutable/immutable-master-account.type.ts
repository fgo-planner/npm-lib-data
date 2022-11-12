import { MasterAccount } from '../master/master-account.type';
import { ImmutableEntityWithTimestamps } from './immutable-entity-with-timestamps.type';
import { ImmutableMasterServant } from './immutable-master-servant.type';

/**
 * Immutable version of `MasterAccount`.
 */
export type ImmutableMasterAccount<ID = string> = ImmutableEntityWithTimestamps<MasterAccount<ID>, ID, 'servants'> & {
    servants: ReadonlyArray<ImmutableMasterServant>
};
