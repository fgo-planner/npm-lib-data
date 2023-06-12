const Buster = 'Buster';
const Arts = 'Arts';
const Quick = 'Quick';

export type GameServantCardType =
    typeof Buster |
    typeof Arts |
    typeof Quick;

/**
 * Enumerations of servant command card types.
 */
export const GameServantCardType = {
    Buster,
    Arts,
    Quick
} as const;
