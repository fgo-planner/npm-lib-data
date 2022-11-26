import { Entity } from '../Entity.type';
import { MasterAccount } from '../master/MasterAccount.type';

export type MasterAccountUpdate<ID = string> = Entity<ID> & Omit<Partial<MasterAccount<ID>>, '_id' | 'createdAt' | 'updatedAt'>;
