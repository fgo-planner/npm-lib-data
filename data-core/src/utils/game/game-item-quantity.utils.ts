import { GameItemQuantity } from '@fgo-planner/data-types';

export function getItemId(gameItemQuantity: GameItemQuantity): number {
    return gameItemQuantity.itemId;
}

export function getQuantity(gameItemQuantity: GameItemQuantity): number {
    return gameItemQuantity.quantity;
}
