import { SerializableDate } from '../SerializableDate.type';

export type PlanCommon<DATE extends SerializableDate = string> = {

    name: string;

    description: string;

    startDate?: DATE;

    endDate?: DATE;

};
