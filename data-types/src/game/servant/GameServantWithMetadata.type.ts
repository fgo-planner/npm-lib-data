import { GameServant } from './GameServant.type';
import { GameServantMetadata } from './GameServantMetadata.type';

export type GameServantWithMetadata = GameServant & {

    metadata: GameServantMetadata;

};
