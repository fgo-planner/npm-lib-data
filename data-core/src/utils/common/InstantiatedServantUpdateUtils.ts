import { InstantiatedServantUpdateBoolean } from '../../types';

export function convertToCostumesMap(source: Iterable<number> | undefined): Map<number, boolean> {
    const result = new Map<number, boolean>();
    if (!source) {
        return result;
    }
    for (const costumeId of source) {
        result.set(costumeId, true);
    }
    return result;
}

export function convertFromCostumesMap(source: ReadonlyMap<number, boolean>): Set<number> {
    const result = new Set<number>();
    for (const [key, value] of source.entries()) {
        if (value) {
            result.add(key);
        }
    }
    return result;
}

export function updateFromCostumesMap(source: ReadonlyMap<number, boolean>, target: Set<number>): void {
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
