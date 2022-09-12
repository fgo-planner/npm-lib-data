import { MasterAccountConstants, MasterServant, MasterServantUtils } from '@fgo-planner/data-core';
import { MasterAccount } from '../types';


/**
 * Regex for checking if a friend ID string is in a valid format. Friend IDs
 * must be exactly 9 characters long and can only contain numerical digits.
 */
const FriendIdFormatValidationRegex = /^\d{9}$/;

/**
 * Validator function that tests the friend ID format validation RegExp against
 * the given friend ID string to check if it's in a valid format.
 */
export function isFriendIdFormatValid(id: string): boolean {
    return FriendIdFormatValidationRegex.test(id);
}

/**
 * Validator function that tests the friend ID format validation RegExp against
 * the given friend ID string to check if it's in a valid format. Null or empty
 * inputs will return true.
 */
export function isFriendIdFormalValidOrEmpty(id: string | null | undefined): boolean {
    if (!id) {
        return true;
    }
    return FriendIdFormatValidationRegex.test(id);
}

/**
 * Validator function that checks if a servant's fou upgrade value is valid. If
 * the value is less than or equal to 1000, the value must be a multiple of 10.
 * Otherwise, the value must be a multiple of 20.
 */
export function isFouValueValid(value: number): boolean {
    if (value <= 1000) {
        return value % 10 === 0;
    }
    return value % 20 === 0;
}

export function servantsSizeLimit(servants: Array<MasterServant>): boolean {
    return servants.length <= MasterAccountConstants.MaxServantsSize;
}

export function servantsInstanceIdsUnique(servants: Array<MasterServant>): boolean {
    if (!servants.length) {
        return true;
    }
    const instanceIds = new Set<number>();
    for (const { instanceId } of servants) {
        if (instanceIds.has(instanceId)) {
            return false;
        }
        instanceIds.add(instanceId);
    }
    return true;
}

export function lastServantInstanceIdValid(this: MasterAccount, lastInstanceId: number): boolean {
    const servants = this.servants;
    if (!servants.length) {
        return true;
    }
    return lastInstanceId >= MasterServantUtils.getLastInstanceId(servants);
}

export function getDefaultLastServantInstanceId(doc: MasterAccount): number {
    const servants = doc.servants;
    if (!servants.length) {
        return 0;
    }
    return MasterServantUtils.getLastInstanceId(servants);
}
