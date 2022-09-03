import { GameServantCardType } from './game-servant-card-type.enum';
import { GameServantNoblePhantasmTarget } from './game-servant-noble-phantasm-target.enum';

export type GameServantNoblePhantasm = {

    cardType: GameServantCardType;

    target: GameServantNoblePhantasmTarget;

};
