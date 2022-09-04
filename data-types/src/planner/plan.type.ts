import { PlanCommon } from './plan-common.type';
import { PlanServant } from './plan-servant.type';
import { PlanUpcomingResources } from './plan-upcoming-resources.type';

export type Plan<ID = string> = PlanCommon<ID> & {

    groupId?: ID;

    targetDate?: Date;

    enabled: {

        ascensions: boolean;

        skills: boolean;

        appendSkills: boolean;

        costumes: boolean;

    };

    shared: boolean;
    
    servants: Array<PlanServant>;

    upcomingResources: Array<PlanUpcomingResources>;

};
