import { BasicPlan } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `BasicPlan` type.
 */
export type PlanBasicDocument = BasicPlan<ObjectId, Date>;
