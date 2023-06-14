import { Entity } from '../Entity.type';
import { SerializableDate } from '../SerializableDate.type';

export type PlanCommon<ID = string, DATE extends SerializableDate = string> = Entity<ID> & {

    name: string;

    description: string;

    startDate?: DATE;

    endDate?: DATE;

};
