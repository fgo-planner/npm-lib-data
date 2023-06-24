import { Plan } from '../planner/Plan.type';
import { OmitEntityWithTimestampsProps } from '../entity/OmitEntityWithTimestampsProps.type';

export type UpdatePlan<ID = string> = Pick<Plan<ID>, '_id' | 'accountId'> & Partial<OmitEntityWithTimestampsProps<Plan<ID>, ID>>;
