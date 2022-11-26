import { Entity } from '../../Entity.type';
import { GameItemBackground } from './GameItemBackground.enum';
import { GameItemUsage } from './GameItemUsage.enum';

/**
 * An inventory item.
 * 
 * Examples:
 * - Servant upgrade materials
 * - Event items and currencies
 * - Other consumable items
 */
export type GameItem = Entity<number> & {

    name: string;

    description?: string;

    /**
     * The sort order of the item when displayed in a list.
     */
    priority: number;

    background: GameItemBackground;

    uses: Array<GameItemUsage>;

};
