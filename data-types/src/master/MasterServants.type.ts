import { InstantiatedServantBondLevel } from '../common/servant/InstantiatedServantBondLevel.type';
import { MasterServant } from './MasterServant.type';

/**
 * Contains data pertaining to the servants in the master account.
 */
export type MasterServants = {

    servants: Array<MasterServant>;

    lastServantInstanceId: number;

    bondLevels: Record<number, InstantiatedServantBondLevel>;

};
