import { User } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `User` type.
 */
export type UserDocument = User<ObjectId, Date>;
