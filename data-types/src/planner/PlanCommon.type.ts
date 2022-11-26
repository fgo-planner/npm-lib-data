import { EntityWithTimestamps } from '../EntityWithTimestamps.type';

export type PlanCommon<ID = string> = EntityWithTimestamps<ID> & {

    accountId: ID;

    name: string;

    description: string;

};
