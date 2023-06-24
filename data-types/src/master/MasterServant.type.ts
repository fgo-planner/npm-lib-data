import { InstantiatedServantAscensionLevel } from '../common/servant/InstantiatedServantAscensionLevel.type';
import { InstantiatedServantEnhancements } from '../common/servant/InstantiatedServantEnhancements.type';
import { InstantiatedServantNoblePhantasmLevel } from '../common/servant/InstantiatedServantNoblePhantasmLevel.type';
import { InstantiatedServantSkillLevel } from '../common/servant/InstantiatedServantSkillLevel.type';
import { InstantiatedServant } from '../common/servant/InstantiatedServant.type';
import { SerializableDate } from '../entity/SerializableDate.type';

/**
 * An instance of a servant that is associated with a `MasterAccount`.
 */
export type MasterServant<DATE extends SerializableDate = string> = InstantiatedServant & InstantiatedServantEnhancements & {

    /**
     * The ID of the `GameServant` that this servant is an instance of.
     */
    servantId: number;

    /**
     * Whether the servant has already been summoned by the master, or is just
     * tentative.
     */
    summoned: boolean;

    /**
     * The servant's summoning date.
     */
    summonDate?: DATE;

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
