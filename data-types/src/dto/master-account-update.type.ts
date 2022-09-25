import { Entity } from '../entity.type';
import { MasterAccount } from '../master/account/master-account.type';

export type MasterAccountUpdate<ID = string> = Entity<ID> & Omit<Partial<MasterAccount<ID>>, '_id' | 'createdAt' | 'updatedAt'>;
