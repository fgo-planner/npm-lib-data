import { MasterAccountUpdate as BaseMasterAccountUpdate } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type MasterAccountUpdate = BaseMasterAccountUpdate<ObjectId>;
