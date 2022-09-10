import { PlanGroup as BasePlanGroup } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type PlanGroup = BasePlanGroup<ObjectId>;
