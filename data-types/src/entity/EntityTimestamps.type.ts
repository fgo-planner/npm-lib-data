import { SerializableDate } from './SerializableDate.type';

/**
 * A data type that is stored as a document in the database with timestamps
 * enabled.
 *
 * @param DATE The data type of date fields. Should be `string` if this type
 * represents serialized JSON data, otherwise should be `Date`.
 */
export type EntityTimestamps<DATE extends SerializableDate = string> = {

    createdAt?: DATE;

    updatedAt?: DATE;

};
