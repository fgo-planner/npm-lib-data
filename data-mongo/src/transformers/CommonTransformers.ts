import { Entity, EntityWithTimestamps } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';

/**
 * @deprecated No longer needed due to `flattenMaps` defaulting to `true`.
 */
export function mapToObject<K, V>(map: Map<K, V>): Record<string, V> {
    /**
         * The `fromEntries` is only available in ES2019 and beyond. Use another method
         * if an older target JS version is needed.
         */
    return Object.fromEntries(map.entries());
}

export function objectIdToString(objectId: ObjectId): string {
    return objectId.toString();
}

export function objectIdsToStrings(objectIds: ReadonlyArray<ObjectId>): Array<string> {
    return objectIds.map(objectIdToString);
}

export function entityIdToString<
    T extends Entity<ObjectId>,
    U extends Entity<string>
>(entity: T): U {
    const result = entity as unknown as U;
    result._id = entity._id.toString();
    return result;
}

export function entitiesIdToString<
    T extends Entity<ObjectId>,
    U extends Entity<string>
>(entities: Array<T>): Array<U> {
    return entities.map(entityIdToString<T, U>);
}

export function entityIdAndTimestampsToString<
    T extends EntityWithTimestamps<ObjectId, Date>,
    U extends EntityWithTimestamps<string, string>
>(entity: T): U {
    const result = entity as unknown as U;
    result._id = entity._id.toString();
    result.createdAt = entity.createdAt?.toJSON();
    result.updatedAt = entity.updatedAt?.toJSON();
    return result;
}

export function entitiesIdAndTimestampsToString<
    T extends Entity<ObjectId>,
    U extends Entity<string>
>(entities: Array<T>): Array<U> {
    return entities.map(entityIdAndTimestampsToString<T, U>);
}

export function dateToString(date: Date): string {
    return date.toJSON();
}

export function optionalDateToString(date: Date | undefined): string | undefined {
    return date?.toJSON();
}
