const BBBAQ = 'BBBAQ';
const BBAAQ = 'BBAAQ';
const BBAQQ = 'BBAQQ';
const BAAAQ = 'BAAAQ';
const BAAQQ = 'BAAQQ';
const BAQQQ = 'BAQQQ';

export type GameServantDeck =
    typeof BBBAQ |
    typeof BBAAQ |
    typeof BBAQQ |
    typeof BAAAQ |
    typeof BAAQQ |
    typeof BAQQQ;

/**
 * Enumeration of all possible servant deck combinations.
 */
export const GameServantDeck = {
    BBBAQ,
    BBAAQ,
    BBAQQ,
    BAAAQ,
    BAAQQ,
    BAQQQ
} as const;
