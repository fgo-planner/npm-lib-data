import { Immutable } from '@fgo-planner/common-core';
import { PlanServant } from '@fgo-planner/data-types';
import * as InstantiatedServantUtils from '../common/InstantiatedServantUtils';

/**
 * Instantiates a default `PlanServant` object.
 */
export function instantiate(instanceId = 0): PlanServant {

    const enhancements = InstantiatedServantUtils.instantiateEnhancements();

    return {
        instanceId,
        enabled: {
            servant: true,
            ascensions: true,
            skills: true,
            appendSkills: true,
            costumes: true
        },
        ...enhancements
    };
}

/**
 * Returns a deep clone of the given `PlanServant` object.
 */
export function clone(planServant: Immutable<PlanServant>): PlanServant {

    const {
        instanceId,
        enabled,
        ...enhancements
    } = planServant;

    return {
        instanceId,
        enabled: {
            ...enabled
        },
        ...InstantiatedServantUtils.cloneEnhancements(enhancements)
    };
}

/**
 * Compares two `PlanServant` object to determine their equality. The
 * `instanceId` field is ignored in the comparison.
 */
export function isEqual(a: Immutable<PlanServant>, b: Immutable<PlanServant>): boolean {
    return InstantiatedServantUtils.isEnhancementsEqual(a, b) &&
        a.enabled.servant === b.enabled.servant &&
        a.enabled.ascensions === b.enabled.ascensions &&
        a.enabled.skills === b.enabled.skills &&
        a.enabled.appendSkills === b.enabled.appendSkills &&
        a.enabled.costumes === b.enabled.costumes;
}
