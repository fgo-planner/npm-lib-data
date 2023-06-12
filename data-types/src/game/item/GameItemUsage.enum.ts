const Skill = 'Skill';
const Ascension = 'Ascension';
const Costume = 'Costume';

export type GameItemUsage =
    typeof Skill |
    typeof Ascension |
    typeof Costume;

/**
 * Enumeration of inventory item enhancement uses.
 */
export const GameItemUsage = {
    Skill,
    Ascension,
    Costume
} as const;
