import { Entity } from '../Entity.type';
import { MasterAccount } from '../master/MasterAccount.type';

export type MasterAccountUpdate = Entity & Omit<Partial<MasterAccount>, '_id' | 'createdAt' | 'updatedAt'>;
