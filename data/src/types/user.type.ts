import { User as BaseUser } from '@fgo-planner/types';
import { ObjectId } from 'bson';

export type User = BaseUser<ObjectId>;
