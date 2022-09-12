/* eslint-disable max-len */

import { MasterAccountConstants } from '@fgo-planner/data-core';

///#region Generic validation messages

export const GenericInvalid = 'Path `{PATH}` ({VALUE}) is invalid.';

export const GenericInvalidFormat = 'Path `{PATH}` ({VALUE}) is in an incorrect format.';

export const GenericInvalidValue = 'Path `{PATH}` ({VALUE}) contains an invalid value.';

export const GenericInvalidValuePathOnly = 'Path `{PATH}` contains an invalid value.';

//#endregion


//#region Number validation messages

export const NumberInteger = 'Path `{PATH}` ({VALUE}) is not an integer.';

export const NumberMin = ''; // TODO Implement this

export const NumberMax = ''; // TODO Implement this

export const RgbColorValue = `${GenericInvalidFormat} Value must be an integer from 0-255.`;

//#endregion


//#region Master account validation messages

export const MasterFriendIdFormat = `${GenericInvalidFormat} It must be exactly 9 characters long and can only contain numerical digits.`;

export const MasterServantFirstSkillUnlocked = `${GenericInvalidValue} The first skill must always be unlocked.`;

export const MasterServantsSizeLimitExceeded = `${GenericInvalidValuePathOnly} Servant count cannot exceed ${MasterAccountConstants.MaxServantsSize}.`;

export const MasterServantsUniqueInstanceId = `${GenericInvalidValuePathOnly} Servant instanceIds must be unique.`;

//#endregion


//#region Plan validation messages

export const PlanServantsUniqueInstanceId = `${GenericInvalidValuePathOnly} Servant instanceIds must be unique.`;

//#endregion
