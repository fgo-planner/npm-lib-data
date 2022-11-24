import { InstantiatedServantEnhancements } from './instantiated-servant-enhancements.type';

export type InstantiatedServantFouSet = keyof Pick<InstantiatedServantEnhancements, 'fouAtk' | 'fouHp'>;
