import { PlanGroup as BasePlanGroup } from '@fgo-planner/types';
import { ObjectId } from 'bson';

export type PlanGroup = BasePlanGroup<ObjectId>;
