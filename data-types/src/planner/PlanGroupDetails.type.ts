import { SerializableDate } from '../SerializableDate.type';
import { PlanCommon } from './PlanCommon.type';

export type PlanGroupDetails<ID = string, DATE extends SerializableDate = string> = PlanCommon<DATE> & {

    plans: Array<ID>;

};
