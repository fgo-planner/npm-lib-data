import { PlanGroup } from './PlanGroup.type';

export type PlanGrouping<ID = string, T = ID> = {

    /**
     * The plans that do not belong to any group.
     */
    ungrouped: Array<T>;

    /**
     * The plan group details.
     */
    groups: Array<PlanGroup<ID, T>>;

};
