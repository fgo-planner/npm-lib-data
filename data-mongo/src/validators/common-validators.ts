/**
 * Checks if the given number is either null (or undefined) or an integer.
 * This can be used as a validator function for optional number fields in
 * place of `Number.isInteger`.
 */
export function isNullOrInteger(number: number): boolean {
    if (number == null) {
        return true;
    }
    return Number.isInteger(number);
}

export function mapIntegerKeysValidator(min?: number, max?: number): (map: Record<any, any> | Map<any, any>) => boolean {
    const isValueValid = integerValidator(min, max);
    return (map: Record<any, any> | Map<any, any>) => {
        if (map instanceof Map) {
            for (const key of map.keys()) {
                if (!isValueValid(key)) {
                    return false;
                }
            }
        } else {
            for (const key of Object.keys(map)) {
                if (!isValueValid(key)) {
                    return false;
                }
            }
        }
        return true;
    };
}

export function mapIntegerValuesValidator(min?: number, max?: number): (map: Record<any, any> | Map<any, any>) => boolean {
    const isValueValid = integerValidator(min, max);
    return (map: Record<any, any> | Map<any, any>) => {
        if (map instanceof Map) {
            for (const value of map.values()) {
                if (!isValueValid(value)) {
                    return false;
                }
            }
        } else {
            for (const value of Object.values(map)) {
                if (!isValueValid(value)) {
                    return false;
                }
            }
        }
        return true;
    };
}

function integerValidator(min?: number, max?: number): (value: any) => boolean {
    return (value: any): boolean => {
        const number = Number(value);
        if (!Number.isInteger(number)) {
            return false;
        }
        if (min != null && number < min) {
            return false;
        }
        if (max != null && number > max) {
            return false;
        }
        return true;
    };
}
