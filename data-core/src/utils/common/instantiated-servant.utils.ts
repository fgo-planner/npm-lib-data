import { Immutable } from '@fgo-planner/common-core';
import { InstantiatedServant, InstantiatedServantAscensionLevel, InstantiatedServantEnhancements } from '@fgo-planner/data-types';
import { InstantiatedServantConstants } from '../../constants';

/**
 * Instantiates a default `InstantiatedServantEnhancements` object.
 */
export function instantiateEnhancements(): InstantiatedServantEnhancements {
    return {
        skills: {},
        appendSkills: {}
    };
}

/**
 * Returns a deep clone of the given `InstantiatedServantEnhancements` object.
 * 
 * Only the properties defined in the `InstantiatedServantEnhancements` type
 * will be included in the cloned copy, any additional properties will be
 * ignored.
 */
export function cloneEnhancements(
    enhancements: Immutable<InstantiatedServantEnhancements>
): InstantiatedServantEnhancements {

    const {
        level,
        ascension,
        fouAtk,
        fouHp,
        skills: {
            1: skill1,
            2: skill2,
            3: skill3
        },
        appendSkills: {
            1: appendSkill1,
            2: appendSkill2,
            3: appendSkill3
        }
    } = enhancements;

    return {
        level,
        ascension,
        fouAtk,
        fouHp,
        skills: {
            1: skill1,
            2: skill2,
            3: skill3
        },
        appendSkills: {
            1: appendSkill1,
            2: appendSkill2,
            3: appendSkill3
        }
    };
}

export function updateEnhancements(
    target: InstantiatedServantEnhancements,
    source: Immutable<InstantiatedServantEnhancements>
): void {
    target.level = source.level;
    target.ascension = source.ascension;
    target.fouHp = source.fouHp;
    target.fouAtk = source.fouAtk;
    target.skills[1] = source.skills[1];
    target.skills[2] = source.skills[2];
    target.skills[3] = source.skills[3];
    target.appendSkills[1] = source.appendSkills[1];
    target.appendSkills[2] = source.appendSkills[2];
    target.appendSkills[3] = source.appendSkills[3];
}

export function isEnhancementsEqual(
    a: Immutable<InstantiatedServantEnhancements>, 
    b: Immutable<InstantiatedServantEnhancements>
): boolean {
    return a.level === b.level &&
        a.ascension === b.ascension &&
        a.fouAtk === b.fouAtk &&
        a.fouHp === b.fouHp &&
        a.skills[1] === b.skills[1] &&
        a.skills[2] === b.skills[2] &&
        a.skills[3] === b.skills[3] &&
        a.appendSkills[1] === b.appendSkills[1] &&
        a.appendSkills[2] === b.appendSkills[2] &&
        a.appendSkills[3] === b.appendSkills[3];
}

/**
 * Returns the servant art stage that corresponds to the given ascension level.
 */
export function getArtStage(ascension: InstantiatedServantAscensionLevel): 1 | 2 | 3 | 4 {
    switch (ascension) {
        case 0:
            return 1;
        case 1:
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
    }
}

/**
 * Rounds the given number to the closest valid Fou enhancement value.
 * 
 * Valid Fou values are integers in multiples of 10 for values between 0 and
 * 1000, and integers in multiples of 20 for values between 1000 and 2000.
 */
export function roundToNearestValidFouValue(value: number): number {
    if (value < InstantiatedServantConstants.MinFou) {
        return InstantiatedServantConstants.MinFou;
    } else if (value > InstantiatedServantConstants.MaxFou) {
        return InstantiatedServantConstants.MaxFou;
    }
    if (value < InstantiatedServantConstants.MaxFou / 2) {
        return Math.round(value / 10) * 10;
    } else {
        return Math.round(value / 20) * 20;
    }
}

/**
 * Given a servant and their current level, rounds their ascension level to the
 * closest valid value.
 */
export function roundToNearestValidAscensionLevel(
    level: number,
    ascension: number,
    maxLevel: number
): InstantiatedServantAscensionLevel {

    if (level > maxLevel - 10) {
        return 4;
    }
    if (level === maxLevel - 10) {
        return ascension === 4 ? 4 : 3;
    }
    if (level > maxLevel - 20) {
        return 3;
    }
    if (level === maxLevel - 20) {
        return ascension >= 3 ? 3 : 2;
    }
    if (level > maxLevel - 30) {
        return 2;
    }
    if (level === maxLevel - 30) {
        return ascension >= 2 ? 2 : 1;
    }
    if (level > maxLevel - 40) {
        return 1;
    }
    if (level === maxLevel - 40) {
        return ascension >= 1 ? 1 : 0;
    }
    return 0;
}

/**
 * Given a servant and their current ascension level, rounds their level to the
 * closest valid value.
 */
export function roundToNearestValidLevel(
    ascension: number,
    level: number,
    maxLevel: number
): number {

    switch (ascension) {
        case 4:
            return Math.max(maxLevel - 10, level);
        case 3:
            return Math.max(maxLevel - 20, Math.min(level, maxLevel - 10));
        case 2:
            return Math.max(maxLevel - 30, Math.min(level, maxLevel - 20));
        case 1:
            return Math.max(maxLevel - 40, Math.min(level, maxLevel - 30));
        case 0:
            return Math.min(maxLevel - 40, level);
    }
    return InstantiatedServantConstants.MinLevel;
}

export function getInstanceId<T extends InstantiatedServant = InstantiatedServant>(servant: T): number {
    return servant.instanceId;
}


