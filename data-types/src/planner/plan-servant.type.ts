import { PlanServantEnhancements } from './plan-servant-enhancements.type';

/**
 * An instance of a servant that is associated with a `Plan`. References a
 * `MasterServant` from the same `MasterAccount`.
 */
export type PlanServant = {

    /**
     * The `instanceId` of the `MasterServant` that this servant references.
     */
    instanceId: number;

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

    /**
     * The servant's enhancement levels before the plan is executed.
     */
    current: PlanServantEnhancements;

    /**
     * The servant's target enhancement levels for the plan.
     */
    target: PlanServantEnhancements;

};
