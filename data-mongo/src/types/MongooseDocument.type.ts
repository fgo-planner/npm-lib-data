import { Entity } from '@fgo-planner/data-core';
import { Document } from 'mongoose';

export type MongooseDocument<ID, T extends Entity<ID>> = T & Document<ID, any, T>;
