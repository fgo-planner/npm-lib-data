import { InstantiatedServantAscensionLevel } from '../common/servant/instantiated-servant-ascension-level.type';
import { InstantiatedServantEnhancements } from '../common/servant/instantiated-servant-enhancements.type';
import { InstantiatedServantNoblePhantasmLevel } from '../common/servant/instantiated-servant-noble-phantasm-level.type';
import { InstantiatedServantSkillLevel } from '../common/servant/instantiated-servant-skill-level.type';
import { InstantiatedServant } from '../common/servant/instantiated-servant.type';

/**
 * An instance of a servant that is associated with a `MasterAccount`.
 */
export type MasterServant = InstantiatedServant & InstantiatedServantEnhancements & {

    /**
     * The ID of the `GameServant` that this servant is an instance of.
     */
    gameId: number;

    /**
     * Whether the servant has already been summoned by the master, or is just
     * tentative.
     */
    summoned: boolean;

    /**
     * The servant's summoning date.
     */
    summonDate?: Date;

    /**
     * Noble phantasm level.
     */
    np: InstantiatedServantNoblePhantasmLevel;

    /**
     * Servant level.
     */
    level: number;

     /**
      * Ascension level.
      */
    ascension: InstantiatedServantAscensionLevel;

    /**
     * Skill levels.
     */
    skills: {

        1: InstantiatedServantSkillLevel;

    };

};
