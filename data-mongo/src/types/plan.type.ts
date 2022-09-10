import { Plan as BasePlan } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type Plan = BasePlan<ObjectId>;
