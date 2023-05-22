import { PlanListItem as BasePlanListItem } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type PlanListItem = BasePlanListItem<ObjectId>;
