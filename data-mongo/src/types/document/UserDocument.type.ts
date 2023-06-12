import { User } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type UserDocument = User<ObjectId, Date>;
