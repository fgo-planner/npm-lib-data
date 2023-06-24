import { SerializableDate } from '../entity/SerializableDate.type';
import { InstantiatedServantBondLevel } from '../common/servant/InstantiatedServantBondLevel.type';
import { MasterServant } from './MasterServant.type';

/**
 * Contains data pertaining to the servants in the master account.
 */
export type MasterServants<DATE extends SerializableDate = string> = {

    servants: Array<MasterServant<DATE>>;

    lastServantInstanceId: number;

    bondLevels: Record<number, InstantiatedServantBondLevel>;

};
