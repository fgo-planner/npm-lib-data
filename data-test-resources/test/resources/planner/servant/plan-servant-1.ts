import { Immutable } from '@fgo-planner/common-types';
import { PlanServant } from '@fgo-planner/data-types';

/**
 * Arash (1* Archer)
 * 
 * ```
    {
        instanceId: 1,
        enabled: {
            servant: true,
            ascensions: true,
            skills: true,
            appendSkills: false,
            costumes: true
        },
        fouHp: 1000,
        skills: {
            1: 9,
            2: 9
        },
        appendSkills: {}
    }
    ```
 */
export const PlanServant_1: Immutable<PlanServant> = {
    instanceId: 1,
    enabled: {
        servant: true,
        ascensions: true,
        skills: true,
        appendSkills: false,
        costumes: true
    },
    fouHp: 1000,
    skills: {
        1: 9,
        2: 9
    },
    appendSkills: {}
};
