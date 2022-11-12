import { InstantiatedServantUpdateBoolean } from '../../types/common/instantiated-servant-update-boolean.type';

export function generateCostumesMap(unlockedCostumes: Iterable<number> | undefined): Map<number, boolean> {
    const result = new Map<number, boolean>();
    if (!unlockedCostumes) {
        return result;
    }
    for (const costumeId of unlockedCostumes) {
        result.set(costumeId, true);
    }
    return result;
}

export function updateCostumesFromMap(source: ReadonlyMap<number, boolean>, target: Set<number>): void {
    if (!source.size) {
        return;
    }
    for (const [key, value] of source.entries()) {
        if (value) {
            target.add(key);
        } else {
            target.delete(key);
        }
    }
}

export function fromBoolean(value: boolean): InstantiatedServantUpdateBoolean {
    return value ? InstantiatedServantUpdateBoolean.True : InstantiatedServantUpdateBoolean.False;
}

export function toBoolean(value: InstantiatedServantUpdateBoolean): boolean {
    return value === InstantiatedServantUpdateBoolean.True;
}

export function equalsBoolean(a: InstantiatedServantUpdateBoolean, b: boolean): boolean {
    if (a === InstantiatedServantUpdateBoolean.Indeterminate) {
        return false;
    }
    return (
        b === true && a === InstantiatedServantUpdateBoolean.True ||
        b === false && a === InstantiatedServantUpdateBoolean.False
    );
}

/**
 * Compares two values, one of which can be `null`, and the other `undefined`.
 * If the first value is `null`, then returns `true` if the second value is
 * `undefined`. Otherwise, returns the strict comparison between the two values.
 */
export function isEqualValue<T>(a: T | null, b: T | undefined): boolean {
    if (a === null) {
        return b === undefined;
    }
    return a === b;
}
