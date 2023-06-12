import { PlanGroup } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type PlanGroupDocument = PlanGroup<ObjectId, Date>;
