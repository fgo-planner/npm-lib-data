import { PlanGroupDetails } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type PlanGroupDetailsDocument = PlanGroupDetails<ObjectId, Date>;
