import { Entity } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';
import { MasterServantsDocument } from './MasterServantsDocument.type';

/**
 * Projected version of the `MasterAccount` type with only `servants.lastServantInstanceId`.
 */
export type MasterAccountLastServantInstanceIdDocument = Entity<ObjectId> & {
    servants: Pick<MasterServantsDocument, 'lastServantInstanceId'>;
};
