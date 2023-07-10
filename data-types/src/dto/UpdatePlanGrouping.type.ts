import { SerializableDate } from '../entity/SerializableDate.type';
import { PlanGrouping } from '../planner/PlanGrouping.type';

export type UpdatePlanGrouping<ID = string, DATE extends SerializableDate = string> = PlanGrouping<ID, ID, DATE> & {
    accountId: ID;
};
