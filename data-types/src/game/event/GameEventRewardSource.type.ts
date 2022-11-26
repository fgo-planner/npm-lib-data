import { ItemQuantities } from '../../common/item/ItemQuantities.type';
import { GameEventRewardSourceType } from './GameEventRewardSourceType.enum';

export type GameEventRewardSource = {

    type: GameEventRewardSourceType;

    name?: string;

    currencyId?: number;

    masterRewards: {

        silverFous: number;

        goldFous: number;

        silverEmbers: number;

        goldEmbers: number;

        manaPrisms: number;

        rarePrisms: number;
        
        qp: number;

        bronzeFruits: number;

        silverFruits: number;

        goldFruits: number;

        saintQuartz: number;

        summonTickets: number;

        flames: number;
        
        grails: number;
        
        lores: number;

        rerunLores: number;

    };

    enhancementRewards: ItemQuantities;

};
