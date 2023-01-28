const All = 'All';
const One = 'One';
const Support = 'Support';

export type GameServantNoblePhantasmTarget =
    typeof All |
    typeof One |
    typeof Support;

/**
 * Enumerations of servant noble phantasm targets.
 */
export const GameServantNoblePhantasmTarget = {

    /**
     * The noble phantasm does damage to all enemies. Corresponds to the `All
     * Enemies` in-game filter option.
     */
    All,

    /**
     * The noble phantasm does damage to a single enemy. Corresponds to the `One
     * Enemy` in-game filter option.
     */
    One,

    /**
     * The noble phantasm does not do any damage. Corresponds to the `Support NP`
     * in-game filter option.
     */
    Support

} as const;
