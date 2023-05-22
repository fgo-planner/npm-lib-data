import { Entity } from '@fgo-planner/data-types';

export function getIdString<ID>(entity: Entity<ID>): string {
    return String(entity._id);
}
