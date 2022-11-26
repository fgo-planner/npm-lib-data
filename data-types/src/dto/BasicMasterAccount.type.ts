import { MasterAccount } from '../master/MasterAccount.type';

export type BasicMasterAccount<ID = string> = Pick<MasterAccount<ID>,
    '_id' |
    'name' |
    'friendId' |
    'createdAt' |
    'updatedAt'
>;
