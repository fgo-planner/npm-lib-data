/* eslint-disable max-len */
/**
 * Mongoose validation message strings.
 */
export class ValidationStrings {

    ///#region Generic validation messages

    static readonly GenericInvalid = 'Path `{PATH}` ({VALUE}) is invalid.';

    static readonly GenericInvalidFormat = 'Path `{PATH}` ({VALUE}) is in an incorrect format.';

    static readonly GenericInvalidValue = 'Path `{PATH}` ({VALUE}) contains an invalid value.';

    static readonly GenericInvalidValuePathOnly = 'Path `{PATH}` contains an invalid value.';
    
    //#endregion


    //#region Number validation messages

    static readonly NumberInteger = 'Path `{PATH}` ({VALUE}) is not an integer.';

    static readonly NumberMin = ''; // TODO Implement this

    static readonly NumberMax = ''; // TODO Implement this

    static readonly RgbColorValue = `${ValidationStrings.GenericInvalidFormat} Value must be an integer from 0-255.`;

    //#endregion
    

    //#region Master account validation messages

    static readonly MasterFriendIdFormat = `${ValidationStrings.GenericInvalidFormat} It must be exactly 9 characters long and can only contain numerical digits.`;

    static readonly MasterServantFirstSkillUnlocked = `${ValidationStrings.GenericInvalidValue} The first skill must always be unlocked.`;
    
    static readonly MasterServantUniqueInstanceId = `${ValidationStrings.GenericInvalidValuePathOnly} Servant instanceIds must be unique.`;
    
    //#endregion

}