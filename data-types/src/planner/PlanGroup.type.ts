import { EntityWithTimestamps } from '../entity/EntityWithTimestamps.type';
import { SerializableDate } from '../entity/SerializableDate.type';

export type PlanGroup<ID = string, T = ID, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {

    name: string;

    description: string;

    plans: Array<T>;

};
