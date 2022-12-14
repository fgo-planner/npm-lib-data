import { Immutable, ReadonlyDate } from '@fgo-planner/common-types';
import { MasterServant } from '../master/MasterServant.type';

/**
 * Immutable version of `MasterServant`.
 */
export type ImmutableMasterServant = Immutable<Omit<MasterServant, 'summonDate'>> & {
    summonDate?: ReadonlyDate;
};
