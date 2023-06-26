import { OmitEntityWithTimestampsProps } from '../entity/OmitEntityWithTimestampsProps.type';
import { PlanGroup } from '../planner/PlanGroup.type';

export type CreatePlanGroup<ID = string> = OmitEntityWithTimestampsProps<PlanGroup<ID>, ID> & {

    accountId: ID;

};
