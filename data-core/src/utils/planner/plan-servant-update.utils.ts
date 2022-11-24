import { Immutable, ImmutableArray } from '@fgo-planner/common-core';
import { PlanServant } from '@fgo-planner/data-types';
import { InstantiatedServantUpdateBoolean, InstantiatedServantUpdateIndeterminateValue as IndeterminateValue, PlanServantUpdate } from '../../types';
import * as ServantUpdateUtils from '../common/instantiated-servant-update.utils';
import * as PlanServantUtils from './plan-servant.utils';

//#region PlanServantUpdate instantiation functions

/**
 * Instantiates a default `PlanServantUpdate` object for adding a plan servant.
 */
export function createNew(unlockedCostumes?: Iterable<number>): PlanServantUpdate {
    return {
        enabled: {
            servant: InstantiatedServantUpdateBoolean.True,
            ascensions: InstantiatedServantUpdateBoolean.True,
            skills: InstantiatedServantUpdateBoolean.True,
            appendSkills: InstantiatedServantUpdateBoolean.True,
            costumes: InstantiatedServantUpdateBoolean.True
        },
        level: null,
        ascension: null,
        fouAtk: null,
        fouHp: null,
        skills: {
            1: null,
            2: null,
            3: null
        },
        appendSkills: {
            1: null,
            2: null,
            3: null
        },
        costumes: ServantUpdateUtils.convertToCostumesMap(unlockedCostumes)
    };
}

/**
 * Creates a `PlanServantUpdate` object from an existing plan servant.
 */
export function createFromExisting(
    planServant: Immutable<PlanServant>,
    unlockedCostumes?: Iterable<number>
): PlanServantUpdate;

/**
 * Creates a `PlanServantUpdate` object from multiple existing plan servants.
 */
export function createFromExisting(
    planServants: ImmutableArray<PlanServant>,
    unlockedCostumes?: Iterable<number>
): PlanServantUpdate;

/**
 * Function implementation.
 */
export function createFromExisting(
    source: ImmutableArray<PlanServant> | Immutable<PlanServant>,
    unlockedCostumes?: Iterable<number>
): PlanServantUpdate {

    if (Array.isArray(source)) {
        return _createFromExistingMultiple(source, unlockedCostumes);
    }
    
    return _createFromExistingSingle(source as Immutable<PlanServant>, unlockedCostumes);
}

function _createFromExistingSingle(
    planServant: Immutable<PlanServant>,
    unlockedCostumes?: Iterable<number>
): PlanServantUpdate {

    const {
        enabled: {
            servant,
            ascensions,
            skills,
            appendSkills,
            costumes
        },
        level = null,
        ascension = null,
        fouAtk = null,
        fouHp = null,
        skills: {
            1: skill1 = null,
            2: skill2 = null,
            3: skill3 = null
        },
        appendSkills: {
            1: appendSkill1 = null,
            2: appendSkill2 = null,
            3: appendSkill3 = null
        }
    } = planServant;

    return {
        enabled: {
            servant: ServantUpdateUtils.fromBoolean(servant),
            ascensions: ServantUpdateUtils.fromBoolean(ascensions),
            skills: ServantUpdateUtils.fromBoolean(skills),
            appendSkills: ServantUpdateUtils.fromBoolean(appendSkills),
            costumes: ServantUpdateUtils.fromBoolean(costumes)
        },
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
        },
        costumes: ServantUpdateUtils.convertToCostumesMap(unlockedCostumes)
    };

}

function _createFromExistingMultiple(
    planServants: ImmutableArray<PlanServant>,
    unlockedCostumes?: Iterable<number>
): PlanServantUpdate {

    /**
     * Edge cases
     */
    if (!planServants.length) {
        throw new Error('planServants array cannot be empty');
    } else if (planServants.length === 1) {
        return _createFromExistingSingle(planServants[0], unlockedCostumes);
    }

    /**
     * Use the values from the first servant in the array as baseline.
     */
    /** */
    const baseline = _createFromExistingSingle(planServants[0]);

    let {
        enabled: {
            servant: servantEnabled,
            ascensions: ascensionsEnabled,
            skills: skillsEnabled,
            appendSkills: appendSkillsEnabled,
            costumes: costumesEnabled
        },
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
    } = baseline;

    /**
     * Iterate through the rest of the array and update the values as needed.
     *
     * Use != instead of !== for comparison due to source value possible being
     * undefined, but update value possibly being null.
     */
    for (let i = 1; i < planServants.length; i++) {
        const planServant = planServants[i];
        if (!ServantUpdateUtils.equalsBoolean(servantEnabled, planServant.enabled.servant)) {
            servantEnabled = IndeterminateValue;
        }
        if (!ServantUpdateUtils.equalsBoolean(ascensionsEnabled, planServant.enabled.ascensions)) {
            ascensionsEnabled = IndeterminateValue;
        }
        if (!ServantUpdateUtils.equalsBoolean(skillsEnabled, planServant.enabled.skills)) {
            skillsEnabled = IndeterminateValue;
        }
        if (!ServantUpdateUtils.equalsBoolean(appendSkillsEnabled, planServant.enabled.appendSkills)) {
            appendSkillsEnabled = IndeterminateValue;
        }
        if (!ServantUpdateUtils.equalsBoolean(costumesEnabled, planServant.enabled.costumes)) {
            costumesEnabled = IndeterminateValue;
        }
        if (fouAtk !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(fouAtk, planServant.fouAtk)) {
            fouAtk = IndeterminateValue;
        }
        if (fouHp !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(fouHp, planServant.fouHp)) {
            fouHp = IndeterminateValue;
        }
        if (skill1 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(skill1, planServant.skills[1])) {
            skill1 = IndeterminateValue;
        }
        if (skill2 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(skill2, planServant.skills[2])) {
            skill2 = IndeterminateValue;
        }
        if (skill3 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(skill3, planServant.skills[3])) {
            skill3 = IndeterminateValue;
        }
        if (appendSkill1 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(appendSkill1, planServant.appendSkills[1])) {
            appendSkill1 = IndeterminateValue;
        }
        if (appendSkill2 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(appendSkill2, planServant.appendSkills[2])) {
            appendSkill2 = IndeterminateValue;
        }
        if (appendSkill3 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(appendSkill3, planServant.appendSkills[3])) {
            appendSkill3 = IndeterminateValue;
        }
    }

    return {
        enabled: {
            servant: servantEnabled,
            ascensions: ascensionsEnabled,
            skills: skillsEnabled,
            appendSkills: appendSkillsEnabled,
            costumes: costumesEnabled
        },
        level: IndeterminateValue,
        ascension: IndeterminateValue,
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
        },
        costumes: ServantUpdateUtils.convertToCostumesMap(unlockedCostumes)
    };

}

//#endregion


//#region Update functions

/**
 * Convenience function that instantiates a new `PlanServant` and applies the
 * update to it.
 *
 * @param instanceId The `instanceId` of the returned `PlanServant` instance.
 *
 * @param planServantUpdate The update data that is applied to the otherwise
 * default `PlanServant` instance.
 *
 * @param targetCostumes (optional) The costumes ID set that will be also
 * updated from the update data.
 * 
 * @return New instance of `PlanServant`.
 */
export function toPlanServant(
    instanceId: number,
    planServantUpdate: PlanServantUpdate,
    targetCostumes?: Set<number>
): PlanServant {

    const planServant = PlanServantUtils.instantiate(instanceId);

    return applyToPlanServant(
        planServantUpdate,
        planServant,
        targetCostumes
    );
}

/**
 * Applies update to a `PlanServant` object. Also updates the bond levels map
 * and unlocked costume IDs if provided.
 *
 * @param planServantUpdate The update data that will be applied.
 *
 * @param targetPlanServant The `PlanServant` to be updated.
 *
 * @param targetCostumes (optional) The costumes ID set that will be also
 * updated from the update data.
 * 
 * @return The supplied `PlanServant` instance with the updates applied.
 */
export function applyToPlanServant(
    planServantUpdate: PlanServantUpdate,
    targetPlanServant: PlanServant,
    targetCostumes?: Set<number>
): PlanServant {

    const {
        enabled: {
            servant: servantEnabled,
            ascensions: ascensionsEnabled,
            skills: skillsEnabled,
            appendSkills: appendSkillsEnabled,
            costumes: costumesEnabled
        },
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
        },
        costumes
    } = planServantUpdate;

    if (servantEnabled !== InstantiatedServantUpdateBoolean.Indeterminate) {
        targetPlanServant.enabled.servant = ServantUpdateUtils.toBoolean(servantEnabled);
    }
    if (ascensionsEnabled !== InstantiatedServantUpdateBoolean.Indeterminate) {
        targetPlanServant.enabled.ascensions = ServantUpdateUtils.toBoolean(ascensionsEnabled);
    }
    if (skillsEnabled !== InstantiatedServantUpdateBoolean.Indeterminate) {
        targetPlanServant.enabled.skills = ServantUpdateUtils.toBoolean(skillsEnabled);
    }
    if (appendSkillsEnabled !== InstantiatedServantUpdateBoolean.Indeterminate) {
        targetPlanServant.enabled.appendSkills = ServantUpdateUtils.toBoolean(appendSkillsEnabled);
    }
    if (costumesEnabled !== InstantiatedServantUpdateBoolean.Indeterminate) {
        targetPlanServant.enabled.costumes = ServantUpdateUtils.toBoolean(costumesEnabled);
    }
    if (level !== IndeterminateValue) {
        targetPlanServant.level = level ?? undefined;
    }
    if (ascension !== IndeterminateValue) {
        targetPlanServant.ascension = ascension ?? undefined;
    }
    if (fouAtk !== IndeterminateValue) {
        targetPlanServant.fouAtk = fouAtk ?? undefined;
    }
    if (fouHp !== IndeterminateValue) {
        targetPlanServant.fouHp = fouHp ?? undefined;
    }
    if (skill1 !== IndeterminateValue) {
        targetPlanServant.skills[1] = skill1 || undefined;
    }
    if (skill2 !== IndeterminateValue) {
        targetPlanServant.skills[2] = skill2 || undefined;
    }
    if (skill3 !== IndeterminateValue) {
        targetPlanServant.skills[3] = skill3 || undefined;
    }
    if (appendSkill1 !== IndeterminateValue) {
        targetPlanServant.appendSkills[1] = appendSkill1 || undefined;
    }
    if (appendSkill2 !== IndeterminateValue) {
        targetPlanServant.appendSkills[2] = appendSkill2 || undefined;
    }
    if (appendSkill3 !== IndeterminateValue) {
        targetPlanServant.appendSkills[3] = appendSkill3 || undefined;
    }
    if (targetCostumes) {
        ServantUpdateUtils.updateFromCostumesMap(costumes, targetCostumes);
    }

    return targetPlanServant;
}

//#endregion
