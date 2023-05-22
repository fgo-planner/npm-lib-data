import { PlanCommon } from './PlanCommon.type';
import { PlanServant } from './PlanServant.type';
import { PlanUpcomingResources } from './PlanUpcomingResources.type';

export type Plan<ID = string> = PlanCommon<ID> & {

    targetDate?: Date;

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

};
