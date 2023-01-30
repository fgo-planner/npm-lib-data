import { User as BaseUser } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type User = BaseUser<ObjectId>;
