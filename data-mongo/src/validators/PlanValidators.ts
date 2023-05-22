import { PlanServant, PlanType } from '@fgo-planner/data-core';
import { PlanListItem } from '../types';

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

export function planListPlanItemsHaveNoChildren(planListItems: Array<PlanListItem>): boolean {
    for (const planListItem of planListItems) {
        if (planListItem.type !== PlanType.Plan) {
            continue;
        }
        if ((planListItem as any).children) {
            return false;
        }
    }
    return true;
}

export function planListGroupItemHaveChildren(planListItems: Array<PlanListItem>): boolean {
    for (const planListItem of planListItems) {
        if (planListItem.type !== PlanType.Group) {
            continue;
        }
        if (!planListItem.children) {
            return false;
        }
    }
    return true;
}

export function planListGroupItemChildrenValid(planListItems: Array<PlanListItem>): boolean {
    for (const planListItem of planListItems) {
        if (planListItem.type !== PlanType.Group) {
            continue;
        }
        for (const child of planListItem.children) {
            // Only `Plan` type are allow as children.
            if (child.type !== PlanType.Plan) {
                return false;
            }
            if ((child as any).children) {
                return false;
            }
        }
    }
    return true;
}
