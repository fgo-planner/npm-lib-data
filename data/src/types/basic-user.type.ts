import { BasicUser as BaseBasicUser } from '@fgo-planner/types';
import { ObjectId } from 'bson';

export type BasicUser = BaseBasicUser<ObjectId>;
