import { SerializableDate } from '../SerializableDate.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { PlanGroupDetails } from './PlanGroupDetails.type';

export type PlanGroup<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<{

    accountId: ID;

    ungroupedPlans: Array<ID>;

    groups: Array<PlanGroupDetails<ID, DATE>>;

}, ID, DATE>;
