import { ImmutableMasterServant } from '@fgo-planner/data-types';

/**
 * Space Ishtar (5* Avenger)
 * 
 * ```
    {
        instanceId: 3,
        servantId: 1100900,
        summoned: true,
        summonDate: 1662940800000,
        np: 4,
        level: 106,
        ascension: 4,
        fouAtk: 2000,
        fouHp: 2000,
        skills: {
            1: 10,
            2: 10,
            3: 10
        },
        appendSkills: {
            1: 1,
            2: 10
        }
    }
    ```
 */
export const MasterServant_3_1100900: ImmutableMasterServant = {
    instanceId: 3,
    servantId: 1100900,
    summoned: true,
    summonDate: new Date(1662940800000),
    np: 4,
    level: 106,
    ascension: 4,
    fouAtk: 2000,
    fouHp: 2000,
    skills: {
        1: 10,
        2: 10,
        3: 10
    },
    appendSkills: {
        1: 1,
        2: 10
    }
};
