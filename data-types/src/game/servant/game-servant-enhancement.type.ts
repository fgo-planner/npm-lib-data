import { GameItemQuantities } from '../item/game-item-quantities.type';

/**
 * Material and QP cost for performing servant skill or ascension upgrade.
 */
export type GameServantEnhancement = {

    /**
     * The cost of the upgrade in QP.
     */
    qp: number;

    /**
     * Materials required for the upgrade.
     */
    materials: GameItemQuantities;

};
