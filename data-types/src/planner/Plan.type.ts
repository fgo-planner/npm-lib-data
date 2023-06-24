import { EntityWithTimestamps } from '../entity/EntityWithTimestamps.type';
import { SerializableDate } from '../entity/SerializableDate.type';
import { PlanEnabledEnhancements } from './PlanEnabledEnhancements.type';
import { PlanResources } from './PlanResources.type';
import { PlanServant } from './PlanServant.type';

export type Plan<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {

    accountId: ID;

    name: string;

    description: string;

    startDate?: DATE;

    endDate?: DATE;

    shared: boolean;

    enabled: PlanEnabledEnhancements;

    servants: Array<PlanServant>;

    costumes: Array<number>;

    upcomingResources: Array<PlanResources>;

};
