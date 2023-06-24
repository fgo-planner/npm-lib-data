import { UpdatePlan } from './UpdatePlan.type';

export type CreatePlan<ID = string> = Omit<UpdatePlan<ID>, '_id'> & {

    groupId?: ID;

};
