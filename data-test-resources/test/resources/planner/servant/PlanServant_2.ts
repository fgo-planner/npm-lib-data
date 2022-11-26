import { Immutable } from '@fgo-planner/common-types';
import { PlanServant } from '@fgo-planner/data-types';

/**
 * Chen Gong (2* Caster)
 * 
 * ```
    {
        instanceId: 2,
        enabled: {
            servant: true,
            ascensions: false,
            skills: true,
            appendSkills: false,
            costumes: true
        },
        enhancements: {
            skills: {
                1: 9,
                2: 9,
                3: 10
            },
            appendSkills: {
                2: 10
            }
        }
    }
    ```
 */
export const PlanServant_2: Immutable<PlanServant> = {
    instanceId: 2,
    enabled: {
        servant: true,
        ascensions: false,
        skills: true,
        appendSkills: false,
        costumes: true
    },
    skills: {
        1: 9,
        2: 9,
        3: 10
    },
    appendSkills: {
        2: 10
    }
};
