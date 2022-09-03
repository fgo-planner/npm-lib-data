import { Plan as BasePlan } from '@fgo-planner/types';
import { ObjectId } from 'bson';

export type Plan = BasePlan<ObjectId>;
