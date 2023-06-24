import { OmitEntityWithTimestampsProps } from '../entity/OmitEntityWithTimestampsProps.type';
import { MasterAccount } from '../master/MasterAccount.type';

export type UpdateMasterAccount<ID = string> = Pick<MasterAccount<ID>, '_id'> & Partial<OmitEntityWithTimestampsProps<MasterAccount<ID>, ID>>;
