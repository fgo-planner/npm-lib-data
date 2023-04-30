import { Resources } from '../common/resources/Resources.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { MasterCostumes } from './MasterCostumes.type';
import { MasterServants } from './MasterServants.type';
import { MasterSoundtracks } from './MasterSoundtracks.type';

export type MasterAccount<ID = string> = EntityWithTimestamps<ID> & {

    userId: ID;

    /**
     * Account nickname/display name.
     */
    name?: string;

    friendId?: string;

    exp?: number;

    resources: Resources;
    
    servants: MasterServants;
    
    costumes: MasterCostumes;
    
    soundtracks: MasterSoundtracks;

};
