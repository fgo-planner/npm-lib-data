import { EntityWithTimestamps } from '../entity/EntityWithTimestamps.type';

export type PlanGroup<ID = string, T = ID> = EntityWithTimestamps<ID> & {

    name: string;

    description: string;

    plans: Array<T>;

};
