import { BasicPlan } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type BasicPlanDocument = BasicPlan<ObjectId, Date>;
