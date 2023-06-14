import { Plan } from '../planner/Plan.type';
import { OmitEntityWithTimestampsProps } from '../OmitEntityWithTimestampsProps.type';

export type CreatePlan<ID = string> = Pick<Plan<ID>, 'accountId'> & Partial<OmitEntityWithTimestampsProps<Plan<ID>, ID>> & {

    groupId?: ID;

};
