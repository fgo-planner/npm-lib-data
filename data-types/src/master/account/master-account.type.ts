import { EntityWithTimestamps } from '../../entity-with-timestamps.type';
import { GameEmberQuantities } from '../../game/ember/game-ember-quantities.type';
import { GameItemQuantities } from '../../game/item/game-item-quantities.type';
import { MasterServantBondLevel } from '../servant/master-servant-bond-level.type';
import { MasterServant } from '../servant/master-servant.type';

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
    
    bondLevels: Record<number, MasterServantBondLevel>;
    
    soundtracks: Array<number>;

};
