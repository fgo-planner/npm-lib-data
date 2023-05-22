const Plan = 'Plan';
const Group = 'Group';

export type PlanType =
    typeof Plan |
    typeof Group;

export const PlanType = {
    Plan,
    Group
} as const;
