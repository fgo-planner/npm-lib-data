import { EmberQuantities } from '../common/ember/EmberQuantities.type';
import { ItemQuantities } from '../common/item/ItemQuantities.type';

export type PlanResources = {

    items: ItemQuantities;

    embers: EmberQuantities;

    qp: number;

};
