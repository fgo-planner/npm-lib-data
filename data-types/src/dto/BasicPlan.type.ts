import { SerializableDate } from '../entity/SerializableDate.type';
import { Plan } from '../planner/Plan.type';

export type BasicPlan<ID = string, DATE extends SerializableDate = string> = Pick<Plan<ID, DATE>,
    '_id' |
    'name' |
    'description' |
    'startDate' |
    'endDate' |
    'shared' |
    'createdAt' |
    'updatedAt'
>;
