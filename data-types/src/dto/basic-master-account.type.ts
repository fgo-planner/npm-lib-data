import { MasterAccount } from '../master/master-account.type';

export type BasicMasterAccount<ID = string> = Pick<MasterAccount<ID>,
    '_id' |
    'name' |
    'friendId' |
    'createdAt' |
    'updatedAt'
>;
