import { DateTimeUtils } from '@fgo-planner/common-core';
import { ImmutableMasterServant, MasterServant } from '@fgo-planner/data-types';
import { InstantiatedServantConstants, MasterServantConstants } from '../../constants';
import { getInstanceId } from '../common/InstantiatedServantUtils';
import * as InstantiatedServantUtils from '../common/InstantiatedServantUtils';

/**
 * Instantiates a default `MasterServant` object.
 */
export function instantiate(instanceId = 0): MasterServant {
    return {
        instanceId,
        servantId: MasterServantConstants.DefaultServantId,
        summoned: true, // Assume servant has been summoned by player by default
        np: InstantiatedServantConstants.MinNoblePhantasmLevel,
        level: InstantiatedServantConstants.MinLevel,
        ascension: InstantiatedServantConstants.MinAscensionLevel,
        skills: {
            1: InstantiatedServantConstants.MinSkillLevel
        },
        appendSkills: {}
    };
}

/**
 * Returns a deep clone of the given `MasterServant` object.
 */
export function clone(masterServant: ImmutableMasterServant): MasterServant {

    const summonDate = DateTimeUtils.cloneDate(masterServant.summonDate);
    
    return {
        ...masterServant,
        summonDate,
        skills: {
            ...masterServant.skills
        },
        appendSkills: {
            ...masterServant.appendSkills
        }
    };
}

/**
 * Finds the largest `instanceId` in the given `MasterServant` array.
 */
export function getLastInstanceId(masterServants: ReadonlyArray<ImmutableMasterServant>): number {
    if (!masterServants.length) {
        return 0;
    }
    return Math.max(...masterServants.map(getInstanceId));
}

/**
 * Compares two `MasterServants` object to determine their equality. The
 * `instanceId` and `servantId` fields are ignored in the comparison.
 */
export function isEqual(a: ImmutableMasterServant, b: ImmutableMasterServant): boolean {
    return InstantiatedServantUtils.isEnhancementsEqual(a, b) &&
        a.summoned === b.summoned &&
        a.summonDate?.getTime() === b.summonDate?.getTime() &&
        a.np === b.np;
}
