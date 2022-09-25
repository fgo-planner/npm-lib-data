import { ReadonlyIterable, ReadonlyRecord } from '@fgo-planner/common-core';
import { ImmutableMasterServant, MasterServant, MasterServantBondLevel } from '@fgo-planner/data-types';
import { MasterServantConstants } from '../../constants';
import { ExistingMasterServantUpdate, ImportedMasterServantUpdate, MasterServantUpdate, MasterServantUpdateIndeterminate as Indeterminate, MasterServantUpdateIndeterminateValue as IndeterminateValue, NewMasterServantUpdate } from '../../types';
import * as MasterServantUtils from './master-servant.utils';

//#region Local type definitions

type BondLevels = ReadonlyRecord<number, MasterServantBondLevel>;

type UnlockedCostumes = ReadonlyIterable<number>;

//#endregion


//#region Constants

const NewMasterServantUpdateType = 'New';

const ExistingMasterServantUpdateType = 'Existing';

//#endregion


//#region MasterServantUpdate instantiation functions

/**
 * Creates a `NewMasterServantUpdate` instance for a new servant.
 */
export function createNew(
    bondLevels?: BondLevels,
    unlockedCostumes?: UnlockedCostumes
): NewMasterServantUpdate {

    const gameId = MasterServantConstants.DefaultServantId;

    return {
        type: NewMasterServantUpdateType,
        gameId,
        summoned: true, // Assume servant has been summoned by player by default
        np: MasterServantConstants.MinNoblePhantasmLevel,
        level: MasterServantConstants.MinLevel,
        ascension: MasterServantConstants.MinAscensionLevel,
        skills: {
            1: MasterServantConstants.MinSkillLevel,
        },
        appendSkills: {},
        bondLevel: bondLevels?.[gameId],
        unlockedCostumes: _generateUnlockedCostumesMap(unlockedCostumes)
    };

}

/**
 * Creates a `ExistingMasterServantUpdate` object from an existing servant.
 */
export function createFromExisting(
    masterServant: ImmutableMasterServant,
    bondLevels?: BondLevels,
    unlockedCostumes?: UnlockedCostumes
): ExistingMasterServantUpdate;

/**
 * Creates a `ExistingMasterServantUpdate` object from existing servants.
 */
export function createFromExisting(
    masterServants: ReadonlyArray<ImmutableMasterServant>,
    bondLevels?: BondLevels,
    unlockedCostumes?: UnlockedCostumes
): ExistingMasterServantUpdate;

/**
 * Function implementation.
 */
export function createFromExisting(
    source: ReadonlyArray<ImmutableMasterServant> | ImmutableMasterServant,
    bondLevels?: BondLevels,
    unlockedCostumes?: UnlockedCostumes
): MasterServantUpdate {

    if (Array.isArray(source)) {
        return _createFromExistingMultiple(
            source as ReadonlyArray<ImmutableMasterServant>,
            bondLevels,
            unlockedCostumes
        );
    }

    return _createFromExistingSingle(
        source as ImmutableMasterServant,
        bondLevels,
        unlockedCostumes
    );

}

function _createFromExistingSingle(
    masterServant: ImmutableMasterServant,
    bondLevels?: BondLevels,
    unlockedCostumes?: UnlockedCostumes
): ExistingMasterServantUpdate {

    const {
        gameId,
        summoned,
        summonDate,
        np,
        level,
        ascension,
        fouAtk,
        fouHp,
        skills,
        appendSkills
    } = masterServant;

    return {
        type: ExistingMasterServantUpdateType,
        gameId,
        summoned,
        summonDate: summonDate?.getTime(),
        np,
        level,
        ascension,
        fouAtk,
        fouHp,
        skills: { ...skills },
        appendSkills: { ...appendSkills },
        bondLevel: bondLevels?.[masterServant.gameId],
        unlockedCostumes: _generateUnlockedCostumesMap(unlockedCostumes)
    };

}

function _createFromExistingMultiple(
    masterServants: ReadonlyArray<ImmutableMasterServant>,
    bondLevels?: BondLevels,
    unlockedCostumes?: UnlockedCostumes
): ExistingMasterServantUpdate {

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
        if (summonDate !== IndeterminateValue && summonDate !== masterServant.summonDate?.getTime()) {
            summonDate = IndeterminateValue;
        }
        if (summoned !== IndeterminateValue && summoned !== masterServant.summoned) {
            summoned = IndeterminateValue;
        }
        if (np !== IndeterminateValue && np !== masterServant.np) {
            np = IndeterminateValue;
        }
        if (fouAtk !== IndeterminateValue && fouAtk !== masterServant.fouAtk) {
            fouAtk = IndeterminateValue;
        }
        if (fouHp !== IndeterminateValue && fouHp !== masterServant.fouHp) {
            fouHp = IndeterminateValue;
        }
        if (skill1 !== IndeterminateValue && skill1 !== masterServant.skills[1]) {
            skill1 = IndeterminateValue;
        }
        if (skill2 !== IndeterminateValue && skill2 !== masterServant.skills[2]) {
            skill2 = IndeterminateValue;
        }
        if (skill3 !== IndeterminateValue && skill3 !== masterServant.skills[3]) {
            skill3 = IndeterminateValue;
        }
        if (appendSkill1 !== IndeterminateValue && appendSkill1 !== masterServant.appendSkills[1]) {
            appendSkill1 = IndeterminateValue;
        }
        if (appendSkill2 !== IndeterminateValue && appendSkill2 !== masterServant.appendSkills[2]) {
            appendSkill2 = IndeterminateValue;
        }
        if (appendSkill3 !== IndeterminateValue && appendSkill3 !== masterServant.appendSkills[3]) {
            appendSkill3 = IndeterminateValue;
        }
        if (bondLevel !== IndeterminateValue && bondLevel !== bondLevels?.[masterServant.gameId]) {
            bondLevel = IndeterminateValue;
        }
    }

    return {
        type: ExistingMasterServantUpdateType,
        gameId: IndeterminateValue,
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
        unlockedCostumes: _generateUnlockedCostumesMap(unlockedCostumes)
    };

}

function _generateUnlockedCostumesMap(unlockedCostumes: UnlockedCostumes | undefined): Map<number, boolean | Indeterminate> {
    const result = new Map<number, boolean | Indeterminate>();
    if (!unlockedCostumes) {
        return result;
    }
    for (const costumeId of unlockedCostumes) {
        result.set(costumeId, IndeterminateValue);
    }
    return result;
}

//#endregion


//#region Servant update functions

/**
 * Converts an update object to a new instance of `MasterServant`. This can be
 * used even if the `isNewServant` property is `false`. Any update fields that
 * contain an indeterminate value will use the default values generated by the
 * `MasterServantUtils.instantiate` method.
 *
 * @param instanceId The `instanceId` of the returned `MasterServant` instance.
 *
 * @param masterServantUpdate The update data that is applied to the otherwise
 * default `MasterServant` instance.
 *
 * @param targetBondLevels (optional) The bond levels map that will also be
 * updated from the update data.
 *
 * @param targetUnlockedCostumes (optional) The unlocked costumes ID that will
 * be also updated from the update data.
 * 
 * @return New instance of `MasterServant`.
 */
export function toMasterServant(
    instanceId: number,
    masterServantUpdate: MasterServantUpdate,
    targetBondLevels?: Record<number, MasterServantBondLevel>,
    targetUnlockedCostumes?: Array<number> | Set<number>
): MasterServant {
    const masterServant = MasterServantUtils.create(instanceId);
    applyToMasterServant(masterServantUpdate, masterServant, targetBondLevels, targetUnlockedCostumes);
    return masterServant;
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
 * @param targetUnlockedCostumes (optional) The unlocked costumes ID that will
 * be also updated from the update data.
 */
export function applyToMasterServant(
    masterServantUpdate: MasterServantUpdate,
    targetMasterServant: MasterServant,
    targetBondLevels?: Record<number, MasterServantBondLevel>,
    targetUnlockedCostumes?: Array<number> | Set<number>
): void {

    const {
        type,
        summoned,
        summonDate,
        np,
        level,
        ascension,
        fouAtk,
        fouHp,
        skills,
        appendSkills,
        bondLevel,
        unlockedCostumes
    } = masterServantUpdate;

    /**
     * Only update the `gameId` for new servants.
     */
    if (type === NewMasterServantUpdateType) {
        targetMasterServant.gameId = masterServantUpdate.gameId;
    }
    if (summoned !== IndeterminateValue) {
        targetMasterServant.summoned = summoned;
    }
    if (summonDate !== IndeterminateValue) {
        targetMasterServant.summonDate = summonDate === undefined ? undefined : new Date(summonDate);
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
        targetMasterServant.fouAtk = fouAtk;
    }
    if (fouHp !== IndeterminateValue) {
        targetMasterServant.fouHp = fouHp;
    }
    if (skills[1] !== IndeterminateValue) {
        targetMasterServant.skills[1] = skills[1];
    }
    if (skills[2] !== IndeterminateValue) {
        targetMasterServant.skills[2] = skills[2];
    }
    if (skills[3] !== IndeterminateValue) {
        targetMasterServant.skills[3] = skills[3];
    }
    if (appendSkills[1] !== IndeterminateValue) {
        targetMasterServant.appendSkills[1] = appendSkills[1];
    }
    if (appendSkills[2] !== IndeterminateValue) {
        targetMasterServant.appendSkills[2] = appendSkills[2];
    }
    if (appendSkills[3] !== IndeterminateValue) {
        targetMasterServant.appendSkills[3] = appendSkills[3];
    }
    if (bondLevel !== IndeterminateValue && targetBondLevels) {
        if (bondLevel === undefined) {
            delete targetBondLevels[targetMasterServant.gameId];
        } else {
            targetBondLevels[targetMasterServant.gameId] = bondLevel;
        }
    }
    if (targetUnlockedCostumes) {
        _updateUnlockedCostumes(unlockedCostumes, targetUnlockedCostumes);
    }
}

function _updateUnlockedCostumes(source: ReadonlyMap<number, boolean | Indeterminate>, target: Array<number> | Set<number>): void {
    if (!source.size) {
        return;
    }
    let hasChanges = false;
    for (const value of source.values()) {
        if (value !== IndeterminateValue) {
            hasChanges = true;
            break;
        }
    }
    if (!hasChanges) {
        return;
    }
    const isTargetSet = target instanceof Set;
    const targetSet = isTargetSet ? target : new Set(target);
    for (const [key, value] of source.entries()) {
        if (value === true) {
            targetSet.add(key);
        } else if (value === false) {
            targetSet.delete(key);
        }
    }
    if (!isTargetSet) {
        (target as Array<number>).length = 0;
        (target as Array<number>).push(...targetSet);
    }
}

//#endregion


//#region Batch/import update functions

/**
 * Batch applies updates from data import to an existing `MasterServant` array.
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
    masterServantUpdates: Array<ImportedMasterServantUpdate>,
    targetMasterServants: Array<MasterServant>,
    startInstanceId: number,
    targetBondLevels?: Record<number, MasterServantBondLevel>,
    targetUnlockedCostumes?: Array<number> | Set<number>
): number {
    /**
     * Nothing to do, return.
     */
    if (!masterServantUpdates.length) {
        return startInstanceId;
    }

    let instanceId = startInstanceId;

    /**
     * If there are no targets, then no need to do any individual merges, just copy
     * the entire list.
     */
    if (!targetMasterServants.length) {
        for (const update of masterServantUpdates) {
            const masterServant = toMasterServant(instanceId++, update, targetBondLevels, targetUnlockedCostumes);
            targetMasterServants.push(masterServant);
        }
        return instanceId;
    }

    /**
     * Contains the corresponding target for each update. Some updates may not have
     * targets.
     */
    const updateTargets = _findMergeTargets(masterServantUpdates, targetMasterServants);

    /**
     * Iterate through the masterServantUpdates array.
     */
    for (const update of masterServantUpdates) {
        /**
         * The target servant to update.
         */
        const updateTarget = updateTargets.get(update);

        /**
         * If a the update does not have an existing target, then just add it to the
         * target array as a new servant.
         */
        if (!updateTarget) {
            const servant = toMasterServant(instanceId++, update, targetBondLevels, targetUnlockedCostumes);
            targetMasterServants.push(servant);
        } else {
            applyToMasterServant(update, updateTarget, targetBondLevels, targetUnlockedCostumes);
        }
    }

    return instanceId;
}

/**
 * Attempts to find a target for each update. Prioritizes the updates that have
 * `instanceId`. Some updates may end up without a target.
 */
function _findMergeTargets(
    masterServantUpdates: Array<ImportedMasterServantUpdate>,
    targetMasterServants: Array<MasterServant>
): Map<ImportedMasterServantUpdate, MasterServant> {

    const result = new Map<ImportedMasterServantUpdate, MasterServant>();

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
        const { gameId, instanceId } = update;
        if (instanceId == null) {
            continue;
        }
        for (const target of targetMasterServants) {
            if (target.instanceId === instanceId) {
                /**
                 * If the `instanceId` is a match, but the `gameId` is not, then it will be
                 * ignored and processed later as if it did not have an `instanceId`. Otherwise,
                 * add it to the result map and assigned targets set.
                 */
                if (target.gameId === gameId) {
                    result.set(update, target);
                    assignedTargets.add(target);
                }
                break;
            }
        }
        /**
         * If there is no target with a matching `instanceId` at all, then the update
         * will also be processed later as if it did not have an `instanceId.
         */
    }

    /**
     * Then process the rest of the updates. Updates that had an `instanceId` that
     * did not match will also be processed here. These updates will be assigned
     * targets with matching `gameId` in sequential order.
     */
    for (const update of masterServantUpdates) {
        if (result.has(update)) {
            continue;
        }
        const gameId = update.gameId;
        for (const target of targetMasterServants) {
            if (target.gameId === gameId && !assignedTargets.has(target)) {
                result.set(update, target);
                assignedTargets.add(target);
                break;
            }
        }
        /**
         * If target was not found for the update, then just do nothing... it just wont
         * have an entry in the map.
         */
    }

    return result;
}

//#endregion
