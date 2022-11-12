import { InstantiatedServantBondLevel } from '../common/servant/instantiated-servant-bond-level.type';
import { EntityWithTimestamps } from '../entity-with-timestamps.type';
import { GameEmberQuantities } from '../game/ember/game-ember-quantities.type';
import { GameItemQuantities } from '../game/item/game-item-quantities.type';
import { MasterServant } from './master-servant.type';

export type MasterAccount<ID = string> = EntityWithTimestamps<ID> & {

    userId: ID;

    /**
     * Account nickname.
     */
    name?: string;

    friendId?: string;

    exp?: number;

    resources: {

        items: GameItemQuantities;

        embers: GameEmberQuantities;

        qp: number;

    };

    servants: Array<MasterServant>;
    
    lastServantInstanceId: number;

    costumes: Array<number>;
    
    bondLevels: Record<number, InstantiatedServantBondLevel>;
    
    soundtracks: Array<number>;

};
