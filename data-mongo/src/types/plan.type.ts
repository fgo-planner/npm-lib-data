import { Plan as BasePlan } from '@fgo-planner/data-types';
import { ObjectId } from 'bson';

export type Plan = BasePlan<ObjectId>;
