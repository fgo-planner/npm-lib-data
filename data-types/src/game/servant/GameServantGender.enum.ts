const Male = 'Male';
const Female = 'Female';
const Unknown = 'Unknown';

/**
 * Enumerations of servant genders.
 */
export type GameServantGender =
    typeof Male |
    typeof Female |
    typeof Unknown;

/**
 * Enumerations of servant genders.
 */
export const GameServantGender = {
    Male,
    Female,
    Unknown
} as const;
