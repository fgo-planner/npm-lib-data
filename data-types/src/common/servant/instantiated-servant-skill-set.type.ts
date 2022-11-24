import { InstantiatedServantEnhancements } from './instantiated-servant-enhancements.type';

export type InstantiatedServantSkillSet = keyof Pick<InstantiatedServantEnhancements, 'skills' | 'appendSkills'>;
