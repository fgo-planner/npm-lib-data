import { PlanList as BasePlanList } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type PlanList = BasePlanList<ObjectId>;
