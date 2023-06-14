import { Plan } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `Plan` type.
 */
export type PlanDocument = Plan<ObjectId, Date>;
