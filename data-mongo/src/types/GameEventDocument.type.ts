import { GameEvent } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * MongoDB document version of the `GameEvent` type.
 */
export type GameEventDocument = GameEvent<ObjectId, Date>;
