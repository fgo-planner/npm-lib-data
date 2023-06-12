import { DateTimeUtils, Immutable, ReadonlyRecord } from '@fgo-planner/common-core';
import { InstantiatedServantBondLevel, MasterServant } from '@fgo-planner/data-types';
import { InstantiatedServantConstants } from '../../constants';
import { BatchMasterServantUpdate, InstantiatedServantUpdateBoolean, InstantiatedServantUpdateIndeterminateValue as IndeterminateValue, InstantiatedServantUpdateNumber, MasterServantUpdate } from '../../types';
import * as ServantUpdateUtils from '../common/InstantiatedServantUpdateUtils';
import * as MasterServantUtils from './MasterServantUtils';

//#region Local type definitions

type BondLevels = ReadonlyRecord<number, InstantiatedServantBondLevel>;

//#endregion


//#region Instantiation functions

/**
 * Instantiates a default `MasterServantUpdate` object for adding a servant.
 */
export function createNew(
    servantId?: number,
    bondLevels?: BondLevels,
    unlockedCostumes?: Iterable<number>
): MasterServantUpdate {

    let bondLevel: InstantiatedServantUpdateNumber<InstantiatedServantBondLevel> | null;
    if (bondLevels && servantId !== undefined) {
        bondLevel = bondLevels[servantId] || null;
    } else {
        bondLevel = null;
    }

    return {
        summoned: InstantiatedServantUpdateBoolean.True, // Assume servant has been summoned by player by default
        summonDate: null,
        np: InstantiatedServantConstants.MinNoblePhantasmLevel,
        level: InstantiatedServantConstants.MinLevel,
        ascension: InstantiatedServantConstants.MinAscensionLevel,
        fouAtk: null,
        fouHp: null,
        skills: {
            1: InstantiatedServantConstants.MinSkillLevel,
            2: null,
            3: null
        },
        appendSkills: {
            1: null,
            2: null,
            3: null
        },
        bondLevel,
        unlockedCostumes: ServantUpdateUtils.convertToCostumesMap(unlockedCostumes)
    };

}

/**
 * Creates a `MasterServantUpdate` object from an existing servant.
 */
export function createFromExisting(
    masterServant: Immutable<MasterServant>,
    bondLevels?: BondLevels,
    unlockedCostumes?: Iterable<number>
): MasterServantUpdate;

/**
 * Creates a `MasterServantUpdate` object from multiple existing
 * servants.
 */
export function createFromExisting(
    masterServants: ReadonlyArray<Immutable<MasterServant>>,
    bondLevels?: BondLevels,
    unlockedCostumes?: Iterable<number>
): MasterServantUpdate;

/**
 * Function implementation.
 */
export function createFromExisting(
    source: ReadonlyArray<Immutable<MasterServant>> | Immutable<MasterServant>,
    bondLevels?: BondLevels,
    unlockedCostumes?: Iterable<number>
): MasterServantUpdate {

    if (Array.isArray(source)) {
        return _createFromExistingMultiple(
            source,
            bondLevels,
            unlockedCostumes
        );
    }

    return _createFromExistingSingle(
        source as Immutable<MasterServant>,
        bondLevels,
        unlockedCostumes
    );

}

function _createFromExistingSingle(
    masterServant: Immutable<MasterServant>,
    bondLevels?: BondLevels,
    unlockedCostumes?: Iterable<number>
): MasterServantUpdate {

    const {
        servantId,
        summoned,
        summonDate,
        np,
        level,
        ascension,
        fouAtk = null,
        fouHp = null,
        skills: {
            1: skill1,
            2: skill2 = null,
            3: skill3 = null
        },
        appendSkills: {
            1: appendSkill1 = null,
            2: appendSkill2 = null,
            3: appendSkill3 = null
        }
    } = masterServant;

    let bondLevel: InstantiatedServantUpdateNumber<InstantiatedServantBondLevel> | null;
    if (!bondLevels) {
        bondLevel = IndeterminateValue;
    } else {
        bondLevel = bondLevels[servantId] || null;
    }

    return {
        summoned: ServantUpdateUtils.fromBoolean(summoned),
        summonDate: DateTimeUtils.getTime(summonDate) || null,
        np,
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
        bondLevel,
        unlockedCostumes: ServantUpdateUtils.convertToCostumesMap(unlockedCostumes)
    };

}

function _createFromExistingMultiple(
    masterServants: ReadonlyArray<Immutable<MasterServant>>,
    bondLevels?: BondLevels,
    unlockedCostumes?: Iterable<number>
): MasterServantUpdate {

    /**
     * Edge cases
     */
    if (!masterServants.length) {
        throw new Error('masterServants array cannot be empty');
    } else if (masterServants.length === 1) {
        return _createFromExistingSingle(masterServants[0], bondLevels, unlockedCostumes);
    }

    /**
     * Use the values from the first servant in the array as baseline.
     */
    /** */
    const baseline = _createFromExistingSingle(masterServants[0], bondLevels);

    let {
        summoned,
        summonDate,
        np,
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
        bondLevel
    } = baseline;

    /**
     * Iterate through the rest of the array and update the values as needed.
     */
    for (let i = 1; i < masterServants.length; i++) {
        const masterServant = masterServants[i];
        const originalSummonDate = DateTimeUtils.getTime(masterServant.summonDate);
        if (summonDate !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(summonDate, originalSummonDate)) {
            summonDate = IndeterminateValue;
        }
        if (!ServantUpdateUtils.equalsBoolean(summoned, masterServant.summoned)) {
            summoned = IndeterminateValue;
        }
        if (np !== IndeterminateValue && np !== masterServant.np) {
            np = IndeterminateValue;
        }
        if (fouAtk !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(fouAtk, masterServant.fouAtk)) {
            fouAtk = IndeterminateValue;
        }
        if (fouHp !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(fouHp, masterServant.fouHp)) {
            fouHp = IndeterminateValue;
        }
        if (skill1 !== IndeterminateValue && skill1 !== masterServant.skills[1]) {
            skill1 = IndeterminateValue;
        }
        if (skill2 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(skill2, masterServant.skills[2])) {
            skill2 = IndeterminateValue;
        }
        if (skill3 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(skill3, masterServant.skills[3])) {
            skill3 = IndeterminateValue;
        }
        if (appendSkill1 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(appendSkill1, masterServant.appendSkills[1])) {
            appendSkill1 = IndeterminateValue;
        }
        if (appendSkill2 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(appendSkill2, masterServant.appendSkills[2])) {
            appendSkill2 = IndeterminateValue;
        }
        if (appendSkill3 !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(appendSkill3, masterServant.appendSkills[3])) {
            appendSkill3 = IndeterminateValue;
        }
        if (bondLevel !== IndeterminateValue && !ServantUpdateUtils.isEqualValue(bondLevel, bondLevels?.[masterServant.servantId])) {
            bondLevel = IndeterminateValue;
        }
    }

    return {
        summoned,
        summonDate,
        np,
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
        bondLevel,
        unlockedCostumes: ServantUpdateUtils.convertToCostumesMap(unlockedCostumes)
    };

}

//#endregion


//#region Update functions

/**
 * Convenience function that instantiates a new `MasterServant` and applies the
 * update to it.
 *
 * @param instanceId The `instanceId` of the returned `MasterServant` instance.
 *
 * @param masterServantUpdate The update data that is applied to the otherwise
 * default `MasterServant` instance.
 *
 * @param targetBondLevels (optional) The bond levels map that will also be
 * updated from the update data.
 *
 * @param targetUnlockedCostumes (optional) The unlocked costumes ID set that
 * will be also updated from the update data.
 * 
 * @return New instance of `MasterServant`.
 */
export function toMasterServant(
    instanceId: number,
    masterServantUpdate: MasterServantUpdate,
    targetBondLevels?: Record<number, InstantiatedServantBondLevel>,
    targetUnlockedCostumes?: Set<number>
): MasterServant {

    const masterServant = MasterServantUtils.instantiate(instanceId);

    return applyToMasterServant(
        masterServantUpdate,
        masterServant,
        targetBondLevels,
        targetUnlockedCostumes
    );
}

/**
 * Applies update to a `MasterServant` object. Also updates the bond levels map
 * and unlocked costume IDs if provided.
 *
 * @param masterServantUpdate The update data that will be applied.
 *
 * @param targetMasterServant The `MasterServant` to be updated.
 *
 * @param targetBondLevels (optional) The bond levels map that will also be
 * updated from the update data.
 *
 * @param targetUnlockedCostumes (optional) The unlocked costumes ID set that
 * will be also updated from the update data.
 * 
 * @return The supplied `MasterServant` instance with the updates applied.
 */
export function applyToMasterServant(
    masterServantUpdate: MasterServantUpdate,
    targetMasterServant: MasterServant,
    targetBondLevels?: Record<number, InstantiatedServantBondLevel>,
    targetUnlockedCostumes?: Set<number>
): MasterServant {

    const {
        summoned,
        summonDate,
        np,
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
        bondLevel,
        unlockedCostumes
    } = masterServantUpdate;

    if (summoned !== InstantiatedServantUpdateBoolean.Indeterminate) {
        targetMasterServant.summoned = ServantUpdateUtils.toBoolean(summoned);
    }
    if (summonDate !== IndeterminateValue) {
        targetMasterServant.summonDate = summonDate == null ? undefined : new Date(summonDate).toJSON();
    }
    if (np !== IndeterminateValue) {
        targetMasterServant.np = np;
    }
    if (level !== IndeterminateValue) {
        targetMasterServant.level = level;
    }
    if (ascension !== IndeterminateValue) {
        targetMasterServant.ascension = ascension;
    }
    if (fouAtk !== IndeterminateValue) {
        targetMasterServant.fouAtk = fouAtk ?? undefined;
    }
    if (fouHp !== IndeterminateValue) {
        targetMasterServant.fouHp = fouHp ?? undefined;
    }
    if (skill1 !== IndeterminateValue) {
        targetMasterServant.skills[1] = skill1;
    }
    if (skill2 !== IndeterminateValue) {
        targetMasterServant.skills[2] = skill2 || undefined;
    }
    if (skill3 !== IndeterminateValue) {
        targetMasterServant.skills[3] = skill3 || undefined;
    }
    if (appendSkill1 !== IndeterminateValue) {
        targetMasterServant.appendSkills[1] = appendSkill1 || undefined;
    }
    if (appendSkill2 !== IndeterminateValue) {
        targetMasterServant.appendSkills[2] = appendSkill2 || undefined;
    }
    if (appendSkill3 !== IndeterminateValue) {
        targetMasterServant.appendSkills[3] = appendSkill3 || undefined;
    }
    if (bondLevel !== IndeterminateValue && targetBondLevels) {
        if (bondLevel == null) {
            delete targetBondLevels[targetMasterServant.servantId];
        } else {
            targetBondLevels[targetMasterServant.servantId] = bondLevel;
        }
    }
    if (targetUnlockedCostumes) {
        ServantUpdateUtils.updateFromCostumesMap(unlockedCostumes, targetUnlockedCostumes);
    }

    return targetMasterServant;
}


//#endregion


//#region Batch update functions

export type BatchApplyOptions = {
    /**
     * If an update has an `instanceId` value, then it will be used to find a
     * matching target. The target is only assigned the `instanceId` and `servantId`
     * fields match, preventing update from applying to the wrong servant.
     *
     * If an update does not have an `instanceId` value or a matching target could
     * not be found, then the update is ignored.
     * 
     * This is precedence over the other options when set to `true`.
     */
    onlyTargetByInstanceId?: boolean;

    /**
     * If a target with matching `instanceId` and `servantId` could not be found, or if
     * the update did not have an `instanceId` value, then the 'next best' target
     * will be assigned from the remaining target pool solely based on `servantId`.
     * 
     * Defaults to `true` if not specified.
     */
    useNextBestTargetAssignment?: boolean;

    /**
     * If an update does not have a target, then discard the update entirely if this
     * is set to `true`. Otherwise, the update is used to create a new servant and
     * appended to the end of the target array.
     */
    discardIfNoTarget?: boolean;
};

/**
 * Batch applies multiple updates to an existing `MasterServant` array.
 * Also updates the bond levels map and unlocked costume IDs if provided.
 *
 * @param masterServantUpdates The updates that will be applied.
 *
 * @param targetMasterServants The `MasterServant` instances that will be
 * updated.
 * 
 * @param startInstanceId The `instanceId` to start at for servant(s) that are
 * added as part of the operation. 
 *
 * Assumes that this value is greater than the largest `instanceId` value in the
 * `targetMasterServants` array; no validation is performed by this function.
 *
 * @param options (optional) Options for the batch update operation.
 * 
 * @param targetBondLevels (optional) The bond levels map that will also be
 * updated from the update data.
 *
 * @param targetUnlockedCostumes (optional) The unlocked costumes ID that will
 * be also updated from the update data.
 *
 * @return The `instanceId` of the last servant to be added as part of the
 * operation. If no servants were added, then it will return the given value.
 */
export function batchApplyToMasterServants(
    masterServantUpdates: Array<BatchMasterServantUpdate>,
    targetMasterServants: Array<MasterServant>,
    startInstanceId: number,
    options: BatchApplyOptions = {},
    targetBondLevels?: Record<number, InstantiatedServantBondLevel>,
    targetUnlockedCostumes?: Set<number>
): number {
    /**
     * Nothing to do, return.
     */
    if (!masterServantUpdates.length) {
        return startInstanceId;
    }

    const {
        onlyTargetByInstanceId = false,
        useNextBestTargetAssignment = true,
        discardIfNoTarget = false
    } = options;

    /**
     * Contains the corresponding target for each update. Some updates may not have
     * targets.
     */
    const updateTargets = _findMergeTargets(
        masterServantUpdates,
        targetMasterServants,
        onlyTargetByInstanceId,
        useNextBestTargetAssignment
    );

    /**
     * If there are no targets, the only applicable option is `discardIfNoTarget`.
     * Return without doing anything if it is true, or append all updates to the
     * target array as new servants if it is false.
     */
    if (!updateTargets.size) {
        if (discardIfNoTarget) {
            return startInstanceId;
        }
        return batchAppendToMasterServants(
            masterServantUpdates,
            targetMasterServants,
            startInstanceId,
            targetBondLevels,
            targetUnlockedCostumes
        );
    }

    let instanceId = startInstanceId;

    /**
     * Iterate through the masterServantUpdates array.
     */
    for (const update of masterServantUpdates) {
        /**
         * The target servant to update.
         */
        const updateTarget = updateTargets.get(update);

        /**
         * If the update has a target, then apply the update to the target.
         * 
         * If a the update does not have a target, and `onlyTargetByInstanceId` is set
         * to false, then add it to the target array as a new servant.
         * 
         * Otherwise, do nothing...
         */
        if (updateTarget) {
            applyToMasterServant(update, updateTarget, targetBondLevels, targetUnlockedCostumes);
        } else if (!onlyTargetByInstanceId) {
            const servant = toMasterServant(instanceId++, update, targetBondLevels, targetUnlockedCostumes);
            targetMasterServants.push(servant);
        }
    }

    return instanceId;
}

/**
 * Creates a new servant from each update and appends them to the end of the
 * target array in sequential order. Each new servant will have a new
 * `instanceId` assigned regardless of its `instanceId` value in the update.
 * 
 * @param masterServantUpdates The updates that will be applied.
 *
 * @param targetMasterServants The `MasterServant` array that will be updated.
 * 
 * @param startInstanceId The `instanceId` to start at for servant(s) that are
 * added as part of the operation. 
 *
 * Assumes that this value is greater than the largest `instanceId` value in the
 * `targetMasterServants` array; no validation is performed by this function.
 *
 * @param targetBondLevels (optional) The bond levels map that will also be
 * updated from the update data.
 *
 * @param targetUnlockedCostumes (optional) The unlocked costumes ID that will
 * be also updated from the update data.
 *
 * @return The `instanceId` of the last servant to be added as part of the
 * operation. If no servants were added, then it will return the given value.
 */
export function batchAppendToMasterServants(
    masterServantUpdates: Array<BatchMasterServantUpdate>,
    targetMasterServants: Array<MasterServant>,
    startInstanceId: number,
    targetBondLevels?: Record<number, InstantiatedServantBondLevel>,
    targetUnlockedCostumes?: Set<number>
): number {
    let instanceId = startInstanceId;
    for (const update of masterServantUpdates) {
        const masterServant = toMasterServant(instanceId++, update, targetBondLevels, targetUnlockedCostumes);
        targetMasterServants.push(masterServant);
    }
    return instanceId;
}

/**
 * Creates a new servant from each update and replaces the existing ones from the target array.
 * 
 * @param masterServantUpdates The updates that will be applied.
 *
 * @param targetMasterServants The `MasterServant` array that will be updated.
 * 
 * @param startInstanceId The `instanceId` to start at for servant(s) that are
 * added as part of the operation. 
 *
 * Assumes that this value is greater than the largest `instanceId` value in the
 * `targetMasterServants` array (and also the `masterServantUpdates` array if
 * `keepInstanceIds` is set to `true`). No validation is performed by this
 * function.
 *
 * @param keepInstanceIds (optional) Whether to keep the `instanceId` value from
 * the update, if present. If the update did not have an `instanceId`, then a
 * new one is assigned.
 *
 * @param targetBondLevels (optional) The bond levels map that will also be
 * updated from the update data.
 *
 * @param targetUnlockedCostumes (optional) The unlocked costumes ID that will
 * be also updated from the update data.
 *
 * @return The `instanceId` of the last servant to be added as part of the
 * operation. If no servants were added, then it will return the given value.
 */
export function batchOverwriteMasterServants(
    masterServantUpdates: Array<BatchMasterServantUpdate>,
    targetMasterServants: Array<MasterServant>,
    startInstanceId: number,
    keepInstanceIds = true,
    targetBondLevels?: Record<number, InstantiatedServantBondLevel>,
    targetUnlockedCostumes?: Set<number>
): number {

    /**
     * Clear the target array. Alternatively, set targetMasterServants.size = 0 to
     * do the same thing.
     */
    targetMasterServants.splice(0, targetMasterServants.length);

    let instanceId = startInstanceId;
    for (const update of masterServantUpdates) {
        let newInstanceId: number;
        if (update.instanceId != null && keepInstanceIds) {
            newInstanceId = update.instanceId;
        } else {
            newInstanceId = instanceId++;
        }
        const masterServant = toMasterServant(newInstanceId, update, targetBondLevels, targetUnlockedCostumes);
        targetMasterServants.push(masterServant);
    }
    return instanceId;
}

/**
 * Attempts to find a target for each update. Prioritizes the updates that have
 * `instanceId`. Some updates may end up without a target, in which case they
 * will not have an entry in the returned map.
 */
function _findMergeTargets(
    masterServantUpdates: Array<BatchMasterServantUpdate>,
    targetMasterServants: Array<MasterServant>,
    onlyTargetByInstanceId: boolean,
    useNextBestTargetAssignment: boolean
): Map<BatchMasterServantUpdate, MasterServant> {

    const result = new Map<BatchMasterServantUpdate, MasterServant>();

    /**
     * No possible targets, just return the empty map.
     */
    if (!targetMasterServants.length) {
        return result;
    }

    /**
     * Contains all the target servants that have been already assigned.
     */
    const assignedTargets = new Set<MasterServant>();

    /**
     * First process all the updates that have `instanceId`. We do not want to
     * mis-assign a servant that is specifically being targeted by an update (via
     * the `instanceId`) to the wrong update.
     */
    for (const update of masterServantUpdates) {
        const { servantId, instanceId } = update;
        if (instanceId == null) {
            continue;
        }
        for (const target of targetMasterServants) {
            if (target.instanceId === instanceId) {
                /**
                 * If the `instanceId` is a match, but the `servantId` is not, then it will be
                 * ignored and processed later as if it did not have an `instanceId`. Otherwise,
                 * add it to the result map and assigned targets set.
                 */
                if (target.servantId === servantId) {
                    result.set(update, target);
                    assignedTargets.add(target);
                }
                break;
            }
        }
        /**
         * If there is no target with a matching `instanceId` at all, then the update
         * will also be processed later as if it did not have an `instanceId` value.
         */
    }

    /**
     * If `onlyTargetByInstanceId` is true or `useNextBestTargetAssignment` is
     * false, then we are done. The remaining updates will not have targets assigned
     * to them.
     */
    if (onlyTargetByInstanceId || !useNextBestTargetAssignment) {
        return result;
    }

    /**
     * Process the remaining updates. Updates that had an `instanceId` that did not
     * match will also be processed here. Each of these updates will be assigned a
     * target with matching `servantId`, in sequential order.
     */
    for (const update of masterServantUpdates) {
        if (result.has(update)) {
            continue;
        }
        const servantId = update.servantId;
        for (const target of targetMasterServants) {
            if (target.servantId === servantId && !assignedTargets.has(target)) {
                result.set(update, target);
                assignedTargets.add(target);
                break;
            }
        }
        /**
         * If target was not found for the update, then just do nothing...
         */
    }

    return result;
}

//#endregion
