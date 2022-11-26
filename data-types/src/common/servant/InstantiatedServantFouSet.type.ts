import { InstantiatedServantEnhancements } from './InstantiatedServantEnhancements.type';

export type InstantiatedServantFouSet = keyof Pick<InstantiatedServantEnhancements, 'fouAtk' | 'fouHp'>;
