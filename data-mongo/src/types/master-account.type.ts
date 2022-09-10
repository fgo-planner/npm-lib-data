import { MasterAccount as BaseMasterAccount } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type MasterAccount = BaseMasterAccount<ObjectId>;
