import { ValuesType } from 'utility-types';
import { PlanGroupingDocument } from './PlanGroupingDocument.type';

/**
 * MongoDB document version of the `PlanGrouping` type.
 */
export type PlanGroupDocument = ValuesType<PlanGroupingDocument['groups']>;
