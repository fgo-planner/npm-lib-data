import { GameEvent } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

export type GameEventDocument = GameEvent<ObjectId, Date>;
