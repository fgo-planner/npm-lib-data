import { GameEmberQuantities } from '../game/ember/game-ember-quantities.type';
import { GameItemQuantity } from '../game/item/game-item-quantity.type';

export type PlanUpcomingResources = {

    name: string;

    items: Array<GameItemQuantity>;

    embers: GameEmberQuantities;

    qp: number;

};
