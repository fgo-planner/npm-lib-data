import { ImmutableMasterServant } from '@fgo-planner/data-types';

/**
 * Chen Gong (2* Caster)
 * 
 * ```
    {
        instanceId: 2,
        servantId: 504400,
        summoned: true,
        summonDate: 1662940800000,
        np: 5,
        level: 65,
        ascension: 4,
        fouAtk: 1000,
        fouHp: 1000,
        skills: {
            1: 9,
            2: 9,
            3: 10
        },
        appendSkills: {
            2: 10
        }
    }
    ```
 */
export const MasterServant_2_504400: ImmutableMasterServant = {
    instanceId: 2,
    servantId: 504400,
    summoned: true,
    summonDate: new Date(1662940800000),
    np: 5,
    level: 65,
    ascension: 4,
    fouAtk: 1000,
    fouHp: 1000,
    skills: {
        1: 9,
        2: 9,
        3: 10
    },
    appendSkills: {
        2: 10
    }
};
