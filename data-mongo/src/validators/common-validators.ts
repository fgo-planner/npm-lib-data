export class CommonValidators {

    /**
     * Checks if the given number is either null (or undefined) or an integer.
     * This can be used as a validator function for optional number fields in
     * place of `Number.isInteger`.
     */
    static isNullOrInteger(number: number): boolean {
        if (number == null) {
            return true;
        }
        return Number.isInteger(number);
    }

}
