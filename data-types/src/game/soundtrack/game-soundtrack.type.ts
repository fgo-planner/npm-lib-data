import { Entity } from '../../entity.type';
import { GameItemQuantities } from '../item/game-item-quantities.type';

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
    material?: GameItemQuantities

    audioUrl?: string;

    thumbnailUrl?: string;

};
