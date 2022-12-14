import { InstantiatedServantAscensionLevel } from './InstantiatedServantAscensionLevel.type';
import { InstantiatedServantSkillLevel } from './InstantiatedServantSkillLevel.type';

export type InstantiatedServantEnhancements = {

    /**
     * Servant level.
     */
    level?: number;

    /**
     * Ascension level.
     */
    ascension?: InstantiatedServantAscensionLevel;

    /**
     * Attack fou enhancements.
     */
    fouAtk?: number;

    /**
     * HP fou enhancements.
     */
    fouHp?: number;

    /**
     * Skill levels.
     */
    skills: {

        1?: InstantiatedServantSkillLevel;

        2?: InstantiatedServantSkillLevel;

        3?: InstantiatedServantSkillLevel;

    };

    /**
     * Append skill levels.
     */
    appendSkills: {

        1?: InstantiatedServantSkillLevel;

        2?: InstantiatedServantSkillLevel;

        3?: InstantiatedServantSkillLevel;

    };

};
