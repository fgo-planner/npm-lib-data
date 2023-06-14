import { SerializableDate } from '../SerializableDate.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { Resources } from '../common/resources/Resources.type';
import { MasterCostumes } from './MasterCostumes.type';
import { MasterServants } from './MasterServants.type';
import { MasterSoundtracks } from './MasterSoundtracks.type';

export type MasterAccount<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {

    userId: ID;

    /**
     * Account nickname/display name.
     */
    name?: string;

    friendId?: string;

    exp?: number;

    resources: Resources;

    servants: MasterServants<DATE>;

    costumes: MasterCostumes;

    soundtracks: MasterSoundtracks;

};
