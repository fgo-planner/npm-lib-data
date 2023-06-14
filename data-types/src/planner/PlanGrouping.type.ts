import { SerializableDate } from '../SerializableDate.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { PlanGroup } from './PlanGroup.type';

export type PlanGrouping<ID = string, T = ID, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {

    /**
     * The ID of the master account that owns this `PlanGrouping`. Unique, only one
     * `PlanGrouping` per account.
     */
    accountId: ID;

    /**
     * The plans that do not belong to any group.
     */
    ungrouped: Array<T>;

    /**
     * The plan group details.
     */
    groups: Array<PlanGroup<ID, T, DATE>>;

};
