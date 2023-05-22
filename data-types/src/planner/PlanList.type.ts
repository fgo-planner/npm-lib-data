import { PlanListItem } from './PlanListItem.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';

export type PlanList<ID = string> = EntityWithTimestamps<ID> & {

    accountId: ID;

    list: Array<PlanListItem<ID>>;
    
};
