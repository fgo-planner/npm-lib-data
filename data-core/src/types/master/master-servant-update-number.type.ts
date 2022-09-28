import { MasterServantUpdateIndeterminate as Indeterminate } from './master-servant-update-indeterminate.type';

export type MasterServantUpdateNumber<T extends number = number> = T | Indeterminate;
