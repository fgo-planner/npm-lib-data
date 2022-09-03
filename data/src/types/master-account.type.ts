import { MasterAccount as BaseMasterAccount } from '@fgo-planner/types';
import { ObjectId } from 'bson';

export type MasterAccount = BaseMasterAccount<ObjectId>;
