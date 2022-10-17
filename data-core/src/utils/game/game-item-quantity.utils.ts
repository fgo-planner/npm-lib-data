import { GameItemQuantity } from '@fgo-planner/data-types';

/**
 * @deprecated 
 */
export function getItemId(gameItemQuantity: GameItemQuantity): number {
    return gameItemQuantity.itemId;
}

/**
 * @deprecated 
 */
export function getQuantity(gameItemQuantity: GameItemQuantity): number {
    return gameItemQuantity.quantity;
}
