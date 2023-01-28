const Saber = 'Saber';
const Archer = 'Archer';
const Lancer = 'Lancer';
const Rider = 'Rider';
const Caster = 'Caster';
const Assassin = 'Assassin';
const Berserker = 'Berserker';
const Shielder = 'Shielder';
const Ruler = 'Ruler';
const AlterEgo = 'AlterEgo';
const Avenger = 'Avenger';
const MoonCancer = 'MoonCancer';
const Foreigner = 'Foreigner';
const BeastI = 'BeastI';
const BeastII = 'BeastII';
const BeastIIIR = 'BeastIIIR';
const BeastIIIL = 'BeastIIIL';
const BeastFalse = 'BeastFalse';
const Pretender = 'Pretender';
const Unknown = 'Unknown';

export type GameServantClass =
    typeof Saber |
    typeof Archer |
    typeof Lancer |
    typeof Rider |
    typeof Caster |
    typeof Assassin |
    typeof Berserker |
    typeof Shielder |
    typeof Ruler |
    typeof AlterEgo |
    typeof Avenger |
    typeof MoonCancer |
    typeof Foreigner |
    typeof BeastI |
    typeof BeastII |
    typeof BeastIIIR |
    typeof BeastIIIL |
    typeof BeastFalse |
    typeof Pretender |
    typeof Unknown;

/**
 * Enumerations of servant classes.
 */
export const GameServantClass = {
    Saber,
    Archer,
    Lancer,
    Rider,
    Caster,
    Assassin,
    Berserker,
    Shielder,
    Ruler,
    AlterEgo,
    Avenger,
    MoonCancer,
    Foreigner,
    BeastI,
    BeastII,
    BeastIIIR,
    BeastIIIL,
    BeastFalse,
    Pretender,
    Unknown
} as const;
