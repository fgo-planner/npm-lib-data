import { ImmutableMasterServant } from '@fgo-planner/data-types';

/**
 * Arash (1* Archer)
 * 
 * ```
    {
        instanceId: 1,
        servantId: 201300,
        summoned: true,
        summonDate: 1662940800000,
        np: 5,
        level: 60,
        ascension: 4,
        fouAtk: 1000,
        fouHp: 0,
        skills: {
            1: 1,
            2: 1,
            3: 10
        },
        appendSkills: {
            2: 10
        }
    }
    ```
 */
export const MasterServant_1_201300: ImmutableMasterServant = {
    instanceId: 1,
    servantId: 201300,
    summoned: true,
    summonDate: new Date(1662940800000),
    np: 5,
    level: 60,
    ascension: 4,
    fouAtk: 1000,
    fouHp: 0,
    skills: {
        1: 1,
        2: 1,
        3: 10
    },
    appendSkills: {
        2: 10
    }
};
