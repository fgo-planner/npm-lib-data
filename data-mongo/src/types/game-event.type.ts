import { GameEvent as BaseGameEvent } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type GameEvent = BaseGameEvent<ObjectId>;
