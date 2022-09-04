import { PlanGroup as BasePlanGroup } from '@fgo-planner/data-types';
import { ObjectId } from 'bson';

export type PlanGroup = BasePlanGroup<ObjectId>;
