import { BasicMasterAccount } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `BasicMasterAccount` type.
 */
export type MasterAccountBasicDocument = BasicMasterAccount<ObjectId, Date>;
