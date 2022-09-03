import { GameEvent as BaseGameEvent } from '@fgo-planner/types';
import { ObjectId } from 'bson';

export type GameEvent = BaseGameEvent<ObjectId>;
