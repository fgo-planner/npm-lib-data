import { ItemQuantities } from '../../common/item/ItemQuantities.type';
import { Entity } from '../../Entity.type';

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
    material?: ItemQuantities;

    audioUrl?: string;

    thumbnailUrl?: string;

};
