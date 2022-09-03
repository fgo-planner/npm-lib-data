import { EntityWithTimestamps } from '../entity-with-timestamps.type';

export type PlanCommon<ID = string> = EntityWithTimestamps<ID> & {

    accountId: ID;

    name: string;

    description: string;

};
