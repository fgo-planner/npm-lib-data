import { MasterAccount } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type MasterAccountDocument = MasterAccount<ObjectId, Date>;
