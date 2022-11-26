import { EmberQuantities } from '../common/ember/EmberQuantities.type';
import { ItemQuantities } from '../common/item/ItemQuantities.type';
import { InstantiatedServantBondLevel } from '../common/servant/InstantiatedServantBondLevel.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { MasterServant } from './MasterServant.type';

export type MasterAccount<ID = string> = EntityWithTimestamps<ID> & {

    userId: ID;

    /**
     * Account nickname.
     */
    name?: string;

    friendId?: string;

    exp?: number;

    resources: {

        items: ItemQuantities;

        embers: EmberQuantities;

        qp: number;

    };

    servants: Array<MasterServant>;
    
    lastServantInstanceId: number;

    costumes: Array<number>;
    
    bondLevels: Record<number, InstantiatedServantBondLevel>;
    
    soundtracks: Array<number>;

};
