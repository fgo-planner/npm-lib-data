import { MasterAccount as BaseMasterAccount } from '@fgo-planner/data-types';
import { ObjectId } from 'bson';

export type MasterAccount = BaseMasterAccount<ObjectId>;
