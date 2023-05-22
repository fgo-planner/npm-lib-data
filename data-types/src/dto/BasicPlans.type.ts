import { ImmutableBasicPlan } from '../immutable/ImmutableBasicPlan.type';
import { ImmutableBasicPlanGroup } from '../immutable/ImmutableBasicPlanGroup.type';
import { ImmutablePlanList } from '../immutable/ImmutablePlanList.type';

export type BasicPlans<ID = string> = Readonly<{
    plans: ReadonlyArray<ImmutableBasicPlan<ID>>;
    planGroups: ReadonlyArray<ImmutableBasicPlanGroup<ID>>;
    planList: ImmutablePlanList<ID>;
}>;
