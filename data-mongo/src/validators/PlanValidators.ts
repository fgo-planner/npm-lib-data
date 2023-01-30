import { PlanServant } from '@fgo-planner/data-core';

export function servantsInstanceIdsUnique(servants: Array<PlanServant>): boolean {
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
