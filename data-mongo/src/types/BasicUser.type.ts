import { BasicUser as BaseBasicUser } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type BasicUser = BaseBasicUser<ObjectId>;
