import { MasterAccountDocument } from './MasterAccountDocument.type';

/**
 * Projected version of the `MasterAccount` type with only `planGrouping`.
 */
export type MasterAccountPlanGroupingDocument = Pick<MasterAccountDocument, '_id' | 'planGrouping'>;
