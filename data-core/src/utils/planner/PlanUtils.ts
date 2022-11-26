import { Immutable } from '@fgo-planner/common-core';
import { PlanUpcomingResources } from '@fgo-planner/data-types';

export function clonePlanUpcomingResources(upcomingResources: Immutable<PlanUpcomingResources>): PlanUpcomingResources {

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
