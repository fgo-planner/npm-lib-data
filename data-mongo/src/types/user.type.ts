import { User as BaseUser } from '@fgo-planner/data-types';
import { ObjectId } from 'bson';

export type User = BaseUser<ObjectId>;
