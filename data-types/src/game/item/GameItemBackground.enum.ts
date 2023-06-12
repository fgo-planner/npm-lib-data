const None = 'None';
const Bronze = 'Bronze';
const Silver = 'Silver';
const Gold = 'Gold';
const QPReward = 'QPReward';

export type GameItemBackground =
    typeof None |
    typeof Bronze |
    typeof Silver |
    typeof Gold |
    typeof QPReward;

/**
 * Enumeration of inventory item background display types.
 */
export const GameItemBackground = {
    None,
    Bronze,
    Silver,
    Gold,
    QPReward
} as const;
