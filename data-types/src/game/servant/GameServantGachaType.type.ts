const Permanent = 'Permanent';
const StoryLocked = 'StoryLocked';
const Limited = 'Limited';
const Welfare = 'Welfare';
const FriendSummon = 'FriendSummon';

export type GameServantGachaType =
    typeof Permanent |
    typeof StoryLocked |
    typeof Limited |
    typeof Welfare |
    typeof FriendSummon;

/**
 * Enumerations of servant gacha availability types.
 */
export const GameServantGachaType = {
    Permanent,
    StoryLocked,
    Limited,
    Welfare,
    FriendSummon
} as const;
