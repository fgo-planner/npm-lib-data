import { Plan } from '../planner/Plan.type';

export type BasicPlan<ID = string> = Pick<Plan<ID>, 
    '_id' |
    'name' |
    'description' |
    'targetDate' |
    'shared' |
    'createdAt' |
    'updatedAt' 
>;
