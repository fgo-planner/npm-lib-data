import { Immutable } from '@fgo-planner/common-core';
import { PlanResources } from '@fgo-planner/data-types';

export function clonePlanResources(upcomingResources: Immutable<PlanResources>): PlanResources {

    const {
        name,
        items,
        embers,
        qp
    } = upcomingResources;

    return {
        name,
        items: {
            ...items
        },
        embers: {
            ...embers
        },
        qp
    };
}
