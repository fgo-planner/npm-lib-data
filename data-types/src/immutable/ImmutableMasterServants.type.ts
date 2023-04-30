import { Immutable } from '@fgo-planner/common-types';
import { MasterServants } from '../master/MasterServants.type';
import { ImmutableMasterServant } from './ImmutableMasterServant.type';

/**
 * Immutable version of `MasterServants`.
 */
export type ImmutableMasterServants = Immutable<Omit<MasterServants, 'servants'>> & {
    servants: ReadonlyArray<ImmutableMasterServant>;
};
