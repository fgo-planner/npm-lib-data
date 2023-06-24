import { SerializableDate } from '../../entity/SerializableDate.type';
import { GameServant } from './GameServant.type';
import { GameServantMetadata } from './GameServantMetadata.type';

export type GameServantWithMetadata<DATE extends SerializableDate = string> = GameServant<DATE> & {

    metadata: GameServantMetadata;

};
