import { BasicUser } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `BasicUser` type.
 */
export type UserBasicDocument = BasicUser<ObjectId>;
