import { Entity } from './Entity.type';

/**
 * A data type that is stored as a document in the database with timestamps
 * enabled.
 *
 * @param ID The data type of the ID used by the collection that contains
 * documents of this data type.
 */
export type EntityWithTimestamps<ID = string> = Entity<ID> & {

    createdAt?: Date;

    updatedAt?: Date;
    
};
