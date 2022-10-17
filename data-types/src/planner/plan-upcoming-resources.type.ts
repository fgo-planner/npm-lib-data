import { GameEmberQuantities } from '../game/ember/game-ember-quantities.type';
import { GameItemQuantities } from '../game/item/game-item-quantities.type';

export type PlanUpcomingResources = {

    name: string;

    items: GameItemQuantities;

    embers: GameEmberQuantities;

    qp: number;

};
