import { InstantiatedServant } from '../common/servant/InstantiatedServant.type';
import { InstantiatedServantEnhancements } from '../common/servant/InstantiatedServantEnhancements.type';
import { PlanServantEnabledEnhancements } from './PlanServantEnabledEnhancements.type';

/**
 * An instance of a servant that is associated with a `Plan`.
 */
export type PlanServant = InstantiatedServant & InstantiatedServantEnhancements & {

    /**
     * Enhancement categories that are enabled/disabled for plan requirement
     * computations.
     */
    enabled: PlanServantEnabledEnhancements;

};
