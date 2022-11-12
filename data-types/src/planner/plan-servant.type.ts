import { InstantiatedServantEnhancements } from '../common/servant/instantiated-servant-enhancements.type';
import { InstantiatedServant } from '../common/servant/instantiated-servant.type';

/**
 * An instance of a servant that is associated with a `Plan`.
 */
export type PlanServant = InstantiatedServant & InstantiatedServantEnhancements & {

    /**
     * Enhancement categories that are enabled/disabled for plan requirement
     * computations.
     */
    enabled: {

        /**
         * Whether the entire servant's requirements are computed for the plan.
         */
        servant: boolean;

        /**
         * Whether the servant's ascension and level requirements are computed for the
         * plan.
         */
        ascensions: boolean;

        /**
         * Whether the servant's skill requirements are computed for the plan.
         */
        skills: boolean;

        /**
         * Whether the servant's append skill requirements are computed for the plan.
         */
        appendSkills: boolean;

        /**
         * Whether the servant's costume unlock requirements are computed for the plan.
         */
        costumes: boolean;

    };

};
