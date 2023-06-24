import { PlanEnabledEnhancements } from './PlanEnabledEnhancements.type';

/**
 * Enhancement categories that are enabled/disabled for plan requirement
 * computations.
 */
export type PlanServantEnabledEnhancements = PlanEnabledEnhancements & {

    /**
     * Whether the entire servant's requirements are computed for the plan.
     */
    servant: boolean;

};
