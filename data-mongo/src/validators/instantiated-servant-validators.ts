/**
 * Validator function that checks if a servant's fou upgrade value is valid. If
 * the value is less than or equal to 1000, the value must be a multiple of 10.
 * Otherwise, the value must be a multiple of 20.
 */
export function isFouValueValid(value: number): boolean {
    if (value <= 1000) {
        return value % 10 === 0;
    }
    return value % 20 === 0;
}
