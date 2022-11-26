import { InstantiatedServantEnhancements } from './InstantiatedServantEnhancements.type';

export type InstantiatedServantSkillSet = keyof Pick<InstantiatedServantEnhancements, 'skills' | 'appendSkills'>;
