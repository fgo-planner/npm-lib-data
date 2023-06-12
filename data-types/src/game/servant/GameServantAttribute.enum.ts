const Man = 'Man';
const Sky = 'Sky';
const Earth = 'Earth';
const Star = 'Star';
const Beast = 'Beast';

export type GameServantAttribute =
    typeof Man |
    typeof Sky |
    typeof Earth |
    typeof Star |
    typeof Beast;

/**
 * Enumerations of servant attributes.
 */
export const GameServantAttribute = {
    Man,
    Sky,
    Earth,
    Star,
    Beast
} as const;
