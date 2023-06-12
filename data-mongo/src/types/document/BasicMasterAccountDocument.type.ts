import { BasicMasterAccount } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type BasicMasterAccountDocument = BasicMasterAccount<ObjectId, Date>;
