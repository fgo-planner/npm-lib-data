import { Immutable } from '@fgo-planner/common-types';
import { MasterServant } from '@fgo-planner/data-types';

/**
 * Arash (1* Archer)
 */
export const MasterServant_201300: Immutable<MasterServant> = {
    instanceId: 1,
    gameId: 201300,
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
