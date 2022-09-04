import { BasicUser as BaseBasicUser } from '@fgo-planner/data-types';
import { ObjectId } from 'bson';

export type BasicUser = BaseBasicUser<ObjectId>;
