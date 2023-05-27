import { PlanGroup } from '../planner/PlanGroup.type';

export type BasicPlanGroup<ID = string> = Omit<PlanGroup<ID>, 'accountId'>;
