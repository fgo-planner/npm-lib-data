import { EntityWithTimestamps } from '../../entity/EntityWithTimestamps.type';
import { SerializableDate } from '../../entity/SerializableDate.type';
import { ItemQuantities } from '../../common/resources/ItemQuantities.type';

export type GameSoundtrack<DATE extends SerializableDate = string> = EntityWithTimestamps<number, DATE> & {

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
