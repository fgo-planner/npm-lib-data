import { GameItemQuantity } from '../item/game-item-quantity.type';
import { Entity } from '../../entity.type';

export type GameSoundtrack = Entity<number> & {

    name?: string;

    /**
     * The sort order of the soundtrack when displayed in a list.
     */
    priority: number;

    /**
     * Material required to unlock the soundtrack. This should be `undefined` for
     * tracks that are already unlocked by default.
     */
    material?: GameItemQuantity

    audioUrl?: string;

    thumbnailUrl?: string;

};
