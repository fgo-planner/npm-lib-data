import { GameEvent as BaseGameEvent } from '@fgo-planner/data-types';
import { ObjectId } from 'bson';

export type GameEvent = BaseGameEvent<ObjectId>;
