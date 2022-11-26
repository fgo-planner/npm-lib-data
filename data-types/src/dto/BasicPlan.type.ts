import { Plan } from '../planner/Plan.type';

export type BasicPlan<ID = string> = Pick<Plan<ID>, 
    '_id' |
    'groupId' |
    'name' |
    'description' |
    'targetDate' |
    'shared' |
    'createdAt' |
    'updatedAt' 
>;
