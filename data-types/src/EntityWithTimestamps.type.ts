import { Entity } from './Entity.type';
import { SerializableDate } from './SerializableDate.type';

/**
 * A data type that is stored as a document in the database with timestamps
 * enabled.
 *
 * @param ID The data type of the ID used by the collection that contains
 * documents of this data type.
 *
 * @param DATE The data type of date fields. Should be `string` if this type
 * represents serialized JSON data, otherwise should be `Date`.
 */
export type EntityWithTimestamps<ID = string, DATE extends SerializableDate = string> = Entity<ID> & {

    createdAt?: DATE;

    updatedAt?: DATE;

};
