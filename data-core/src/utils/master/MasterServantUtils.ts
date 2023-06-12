import { Immutable, ImmutableArray } from '@fgo-planner/common-core';
import { MasterServant, SerializableDate } from '@fgo-planner/data-types';
import { InstantiatedServantConstants, MasterServantConstants } from '../../constants';
import * as InstantiatedServantUtils from '../common/InstantiatedServantUtils';
import { getInstanceId } from '../common/InstantiatedServantUtils';

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
export function clone(masterServant: Immutable<MasterServant>): MasterServant {
    return {
        ...masterServant,
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
export function getLastInstanceId<DATE extends SerializableDate>(masterServants: ImmutableArray<MasterServant<DATE>>): number {
    if (!masterServants.length) {
        return 0;
    }
    return Math.max(...masterServants.map(getInstanceId));
}

/**
 * Compares two `MasterServants` object to determine their equality. The
 * `instanceId` and `servantId` fields are ignored in the comparison.
 */
export function isEqual(a: Immutable<MasterServant>, b: Immutable<MasterServant>): boolean {
    return InstantiatedServantUtils.isEnhancementsEqual(a, b) &&
        a.summoned === b.summoned &&
        a.summonDate === b.summonDate &&
        a.np === b.np;
}
