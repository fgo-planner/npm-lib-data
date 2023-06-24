import { CollectionUtils, Functions } from '@fgo-planner/common-core';
import { Entity } from '@fgo-planner/data-types';

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
