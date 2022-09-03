import { MasterServantAscensionLevel } from './master-servant-ascension-level.type';
import { MasterServantNoblePhantasmLevel } from './master-servant-noble-phantasm-level.type';
import { MasterServantSkillLevel } from './master-servant-skill-level.type';

/**
 * An instance of a servant that is associated with a `MasterAccount`.
 */
export type MasterServant = {

    /**
     * The identifier of this instance. This is unique for each servant in a
     * `MasterAccount`.
     */
    instanceId: number;

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
     * The noble phantasm level of the servant.
     */
    np: MasterServantNoblePhantasmLevel;

    /**
     * The level of the servant.
     */
    level: number;

    /**
     * The ascension level of the servant.
     */
    ascension: MasterServantAscensionLevel;

    /**
     * The attack fou enhancement of the servant.
     */
    fouAtk?: number;

    /**
     * The HP fou enhancement of the servant.
     */
    fouHp?: number;

    /**
     * The servant's skill levels.
     */
    skills: {

        1: MasterServantSkillLevel;

        2?: MasterServantSkillLevel;

        3?: MasterServantSkillLevel;

    };

    /**
     * The servant's append skill levels.
     */
    appendSkills: {

        1?: MasterServantSkillLevel;

        2?: MasterServantSkillLevel;

        3?: MasterServantSkillLevel;

    };

};
