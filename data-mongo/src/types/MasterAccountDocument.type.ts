import { MasterAccount } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `MasterAccount` type.
 */
export type MasterAccountDocument = MasterAccount<ObjectId, Date>;
