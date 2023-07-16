import { PlanGrouping } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `PlanGrouping` type.
 */
export type PlanGroupingDocument = PlanGrouping<ObjectId, ObjectId, Date>;
