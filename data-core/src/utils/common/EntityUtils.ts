import { CollectionUtils, Functions } from '@fgo-planner/common-core';
import { Entity, SerializableDate } from '@fgo-planner/data-types';
import { EntityTimestamps } from '@fgo-planner/data-types/lib/types/entity/EntityTimestamps.type';

export function getId<ID>(entity: Entity<ID>): ID {
    return entity._id;
}

export function getIdString<ID>(entity: Entity<ID>): string {
    return String(entity._id);
}

export function getOrderedEntities<ID, T extends Entity<ID>>(entities: Array<T>, order: Array<ID>): Array<T>;
export function getOrderedEntities<ID, T extends Entity<ID>>(entityMap: Map<string, T>, order: Array<ID>): Array<T>;
export function getOrderedEntities<ID, T extends Entity<ID>>(entities: Array<T> | Map<string, T>, order: Array<ID>): Array<T> {
    let entityMap: Map<string, T>;
    if (Array.isArray(entities)) {
        entityMap = CollectionUtils.mapIterableToMap(entities, getIdString, Functions.identity);
    } else {
        entityMap = entities;
    }
    const result: Array<T> = [];
    for (const entityId of order) {
        const entityIdString = String(entityId);
        const entity = entityMap.get(entityIdString);
        if (!entity) {
            continue;
        }
        result.push(entity);
        entityMap.delete(entityIdString);
    }
    if (entityMap.size) {
        // Push remaining entities
        for (const entity of entityMap.values()) {
            result.push(entity);
        }
    }
    return result;
}

/**
 * Returns `true` if entity `b` is more recent than entity `a`.
 */
export function isMoreRecent(a: EntityTimestamps<SerializableDate>, b: EntityTimestamps<SerializableDate>): boolean {
    let dateA = a.updatedAt || a.createdAt || '';
    let dateB = b.updatedAt || b.createdAt || '';
    if (dateA instanceof Date) {
        dateA = dateA.toJSON();
    }
    if (dateB instanceof Date) {
        dateB = dateB.toJSON();
    }
    return dateB > dateA;
}
