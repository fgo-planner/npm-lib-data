import { MasterServantAscensionLevel } from '../master/servant/master-servant-ascension-level.type';
import { MasterServantSkillLevel } from '../master/servant/master-servant-skill-level.type';

export type PlanServantEnhancements = {

    level?: number;

    ascension?: MasterServantAscensionLevel;

    fouAtk?: number;

    fouHp?: number;

    skills: {

        1?: MasterServantSkillLevel;

        2?: MasterServantSkillLevel;

        3?: MasterServantSkillLevel;

    };
    
    appendSkills: {

        1?: MasterServantSkillLevel;

        2?: MasterServantSkillLevel;

        3?: MasterServantSkillLevel;

    };

    costumes: number[];

};
