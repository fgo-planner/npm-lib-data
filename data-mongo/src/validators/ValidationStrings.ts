/* eslint-disable max-len */

import { MasterAccountConstants } from '@fgo-planner/data-core';

///#region Generic validation messages

export const GenericInvalid = 'Path `{PATH}` ({VALUE}) is invalid.';

export const GenericInvalidFormat = 'Path `{PATH}` ({VALUE}) is in an incorrect format.';

export const GenericInvalidKeyPathOnly = 'Path `{PATH}` contains an invalid key.';

export const GenericInvalidValue = 'Path `{PATH}` ({VALUE}) contains an invalid value.';

export const GenericInvalidValuePathOnly = 'Path `{PATH}` contains an invalid value.';

//#endregion


//#region Number validation messages

export const NumberInteger = 'Path `{PATH}` ({VALUE}) is not an integer.';

export const NumberMin = ''; // TODO Implement this

export const NumberMax = ''; // TODO Implement this

export const RgbColorValue = `${GenericInvalidFormat} Value must be an integer from 0-255.`;

//#endregion


//#region Master data validation messages

export const MasterAccountLastServantInstanceIdInvalid = `${GenericInvalidValue} Value must be >= the largest servant instanceId`;

export const MasterAccountServantsSizeLimitExceeded = `${GenericInvalidValuePathOnly} Servant count cannot exceed ${MasterAccountConstants.MaxServantsSize}.`;

export const MasterAccountServantsInstanceIdNotUnique = `${GenericInvalidValuePathOnly} Servant instanceIds must be unique.`;

export const MasterFriendIdFormat = `${GenericInvalidFormat} It must be exactly 9 characters long and can only contain numerical digits.`;

export const MasterServantFirstSkillUnlocked = `${GenericInvalidValue} The first skill must always be unlocked.`;

//#endregion


//#region Plan validation messages

export const PlanServantsUniqueInstanceIdNotUnique = `${GenericInvalidValuePathOnly} Servant instanceIds must be unique.`;

export const PlanListPlanItemContainsChildren = `${GenericInvalidValuePathOnly} Plan items cannot contain children.`;

export const PlanListGroupItemMissingChildren = `${GenericInvalidValuePathOnly} Group items must have children array (can be empty).`;

export const PlanListGroupItemInvalid = `${GenericInvalidValuePathOnly} Group items contain invalid children.`;

//#endregion
