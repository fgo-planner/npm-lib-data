import { Plan } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type PlanDocument = Plan<ObjectId, Date>;
