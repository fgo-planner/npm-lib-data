import { OmitEntityProps } from 'src/entity/OmitEntityProps.type';
import { UpdatePlan } from './UpdatePlan.type';

export type CreatePlan<ID = string> = OmitEntityProps<UpdatePlan<ID>, ID> & {

    groupId?: ID;

};
