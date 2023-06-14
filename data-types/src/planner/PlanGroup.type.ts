import { SerializableDate } from '../SerializableDate.type';
import { PlanCommon } from './PlanCommon.type';

export type PlanGroup<ID = string, T = ID, DATE extends SerializableDate = string> = PlanCommon<ID, DATE> & {

    plans: Array<T>;

};
