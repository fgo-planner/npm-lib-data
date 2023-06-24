import { PlanGrouping } from '../planner/PlanGrouping.type';

export type UpdatePlanGrouping<ID = string> = PlanGrouping<ID> & {
    accountId: ID;
};
