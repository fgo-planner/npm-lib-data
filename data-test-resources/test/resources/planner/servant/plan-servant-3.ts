import { Immutable } from '@fgo-planner/common-types';
import { PlanServant } from '@fgo-planner/data-types';

/**
 * Space Ishtar (5* Avenger)
 * 
 * ```
    {
        instanceId: 3,
        enabled: {
            servant: true,
            ascensions: true,
            skills: true,
            appendSkills: false,
            costumes: true
        },
        level: 120,
        ascension: 4,
        skills: {},
        appendSkills: {
            1: 10,
            2: 10,
            3: 10
        }
    }
    ```
 */
export const PlanServant_3: Immutable<PlanServant> = {
    instanceId: 3,
    enabled: {
        servant: true,
        ascensions: true,
        skills: true,
        appendSkills: false,
        costumes: true
    },
    level: 120,
    ascension: 4,
    skills: {},
    appendSkills: {
        1: 10,
        2: 10,
        3: 10
    }
};
