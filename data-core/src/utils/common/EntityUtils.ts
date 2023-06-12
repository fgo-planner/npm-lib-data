import { Entity } from '@fgo-planner/data-types';

export function getIdString<T, ID>(entity: Entity<T, ID>): string {
    return String(entity._id);
}
