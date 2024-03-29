import { MasterAccountConstants, MasterServantUtils } from '@fgo-planner/data-core';
import { MasterAccountDocument, MasterServantDocument } from '../types';

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
export function isFriendIdFormatValidOrEmpty(id: string | null | undefined): boolean {
    if (!id) {
        return true;
    }
    return FriendIdFormatValidationRegex.test(id);
}

export function servantsSizeLimit(servants: Array<MasterServantDocument>): boolean {
    return servants.length <= MasterAccountConstants.MaxServantsSize;
}

export function servantsInstanceIdsUnique(servants: Array<MasterServantDocument>): boolean {
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

export function lastServantInstanceIdValid(servants: Array<MasterServantDocument>, lastInstanceId: number): boolean {
    if (!servants.length) {
        return true;
    }
    return lastInstanceId >= MasterServantUtils.getLastInstanceId(servants);
}

export function getDefaultLastServantInstanceId(document: MasterAccountDocument): number {
    const servants = document.servants.servants;
    if (!servants.length) {
        return 0;
    }
    return MasterServantUtils.getLastInstanceId(servants);
}
