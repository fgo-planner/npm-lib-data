/**
 * A data type that is stored as a document in the database.
 * 
 * @param ID The data type of the ID used by the collection that contains
 * documents of this data type.
 */
export type Entity<T, ID = string> = {

    _id: ID;

} & T;
