/**
 * Enumerations of servant noble phantasm targets.
 */
export enum GameServantNoblePhantasmTarget {
    /**
     * The noble phantasm does damage to all enemies. Corresponds to the `All
     * Enemies` in-game filter option.
     */
    All = 'All',
    /**
     * The noble phantasm does damage to a single enemy. Corresponds to the `One
     * Enemy` in-game filter option.
     */
    One = 'One',
    /**
     * The noble phantasm does not do any damage. Corresponds to the `Support NP`
     * in-game filter option.
     */
    Support = 'Support'
}
