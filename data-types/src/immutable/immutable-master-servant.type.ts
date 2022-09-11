import { Immutable, ReadonlyDate } from '@fgo-planner/common-types';
import { MasterServant } from '../master/servant/master-servant.type';

/**
 * Immutable version of `MasterServant`.
 */
export type ImmutableMasterServant = Immutable<Omit<MasterServant, 'summonDate'>> & {
    summonDate?: ReadonlyDate;
};
