import { SerializableDate } from '../entity/SerializableDate.type';
import { PlanGroup } from './PlanGroup.type';

export type PlanGrouping<ID = string, T = ID, DATE extends SerializableDate = string> = {

    /**
     * The plans that do not belong to any group.
     */
    ungrouped: Array<T>;

    /**
     * The plan group details.
     */
    groups: Array<PlanGroup<ID, T, DATE>>;

};
