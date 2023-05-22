import { PlanType } from './PlanType.enum';

type PlanListBaseItem<ID> = {
    type: PlanType;
    refId: ID;
};

export type PlanListPlanItem<ID = string> = PlanListBaseItem<ID> & {
    type: typeof PlanType.Plan;
};

export type PlanListGroupItem<ID = string> = PlanListBaseItem<ID> & {
    type: typeof PlanType.Group;
    children: Array<PlanListPlanItem<ID>>;
};

export type PlanListItem<ID = string> = PlanListPlanItem<ID> | PlanListGroupItem<ID>;
