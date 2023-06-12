import { SerializableDate } from '../SerializableDate.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { PlanCommon } from './PlanCommon.type';
import { PlanServant } from './PlanServant.type';
import { PlanUpcomingResources } from './PlanUpcomingResources.type';

export type Plan<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<{

    accountId: ID;

    enabled: {

        ascensions: boolean;

        skills: boolean;

        appendSkills: boolean;

        costumes: boolean;

    };

    shared: boolean;

    servants: Array<PlanServant>;

    costumes: Array<number>;

    upcomingResources: Array<PlanUpcomingResources>;

} & PlanCommon<DATE>, ID, DATE>;
