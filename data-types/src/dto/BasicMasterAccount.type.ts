import { SerializableDate } from '../entity/SerializableDate.type';
import { MasterAccount } from '../master/MasterAccount.type';

export type BasicMasterAccount<ID = string, DATE extends SerializableDate = string> = Pick<MasterAccount<ID, DATE>,
    '_id' |
    'name' |
    'friendId' |
    'createdAt' |
    'updatedAt'
>;
