import { ReadonlyRecord } from '@fgo-planner/common-core';
import { GameServantClass, GameServantRarity } from '@fgo-planner/data-types';

export const ClassDisplayNameMap: ReadonlyRecord<keyof typeof GameServantClass, string> = {
    [GameServantClass.Saber]: GameServantClass.Saber,
    [GameServantClass.Archer]: GameServantClass.Archer,
    [GameServantClass.Lancer]: GameServantClass.Lancer,
    [GameServantClass.Rider]: GameServantClass.Rider,
    [GameServantClass.Caster]: GameServantClass.Caster,
    [GameServantClass.Assassin]: GameServantClass.Assassin,
    [GameServantClass.Berserker]: GameServantClass.Berserker,
    [GameServantClass.Shielder]: GameServantClass.Shielder,
    [GameServantClass.Ruler]: GameServantClass.Ruler,
    [GameServantClass.AlterEgo]: 'Alter Ego',
    [GameServantClass.Avenger]: GameServantClass.Avenger,
    [GameServantClass.DemonGodPillar]: 'Demon God Pillar',
    [GameServantClass.GrandCaster]: 'Grand Caster',
    [GameServantClass.BeastII]: 'Beast II',
    [GameServantClass.UshiChaosTide]: 'Ushi Chaos Tide',
    [GameServantClass.BeastI]: 'Beast I',
    [GameServantClass.MoonCancer]: 'Moon Cancer',
    [GameServantClass.BeastIIIR]: 'Beast III/R',
    [GameServantClass.Foreigner]: GameServantClass.Foreigner,
    [GameServantClass.BeastIIIL]: 'Beast III/L',
    [GameServantClass.BeastUnknown]: 'Beast (Unknown)',
    [GameServantClass.Pretender]: GameServantClass.Pretender,
    [GameServantClass.BeastIV]: 'Beast IV',
    [GameServantClass.BeastILost]: 'Beast I (Lost)',
    [GameServantClass.UOlgaMarieAlienGod]: 'Olga Marie Alien God',
    [GameServantClass.UOlgaMarie]: 'Olga Marie',
    [GameServantClass.Beast]: GameServantClass.Beast,
    [GameServantClass.BeastVI]: 'Beast VI',
    [GameServantClass.Unknown]: GameServantClass.Unknown,
    [GameServantClass.AgarthaPenth]: 'Agartha Penth',
    [GameServantClass.CCCFinaleEmiyaAlter]: 'CCC Finale Emiya Alter',
    [GameServantClass.SalemAbby]: 'Salem Abby',
    [GameServantClass.All]: 'All'
    // [GameServantClass.BeastFalse]: 'Beast (False)'
};

export const ClassNumberMap: ReadonlyRecord<keyof typeof GameServantClass, number> = {
    [GameServantClass.Saber]: 1,
    [GameServantClass.Archer]: 2,
    [GameServantClass.Lancer]: 3,
    [GameServantClass.Rider]: 4,
    [GameServantClass.Caster]: 5,
    [GameServantClass.Assassin]: 6,
    [GameServantClass.Berserker]: 7,
    [GameServantClass.Shielder]: 8,
    [GameServantClass.Ruler]: 9,
    [GameServantClass.AlterEgo]: 10,
    [GameServantClass.Avenger]: 11,
    [GameServantClass.DemonGodPillar]: 12,
    [GameServantClass.GrandCaster]: 17,
    [GameServantClass.BeastII]: 20,
    [GameServantClass.UshiChaosTide]: 21,
    [GameServantClass.BeastI]: 22,
    [GameServantClass.MoonCancer]: 23,
    [GameServantClass.BeastIIIR]: 24,
    [GameServantClass.Foreigner]: 25,
    [GameServantClass.BeastIIIL]: 26,
    [GameServantClass.BeastUnknown]: 27,
    [GameServantClass.Pretender]: 28,
    [GameServantClass.BeastIV]: 29,
    [GameServantClass.BeastILost]: 30,
    [GameServantClass.UOlgaMarieAlienGod]: 31,
    [GameServantClass.UOlgaMarie]: 32,
    [GameServantClass.Beast]: 33,
    [GameServantClass.BeastVI]: 34,
    [GameServantClass.Unknown]: 97,
    [GameServantClass.AgarthaPenth]: 107,
    [GameServantClass.CCCFinaleEmiyaAlter]: 124,
    [GameServantClass.SalemAbby]: 125,
    [GameServantClass.All]: 1001
};

export const MinRarity = 0;

export const MaxRarity = 5;

export const MinCost = 0;

export const MaxCost = 16;

export const RarityValues = Array.from(Array(6).keys()) as ReadonlyArray<GameServantRarity>;

export const LevelCapByRarityMap: ReadonlyRecord<GameServantRarity, number> = {
    0: 65,
    1: 60,
    2: 65,
    3: 70,
    4: 80,
    5: 90
};

export const PalingenesisQpCostMap: ReadonlyRecord<GameServantRarity, ReadonlyRecord<number, number>> = {
    0: {
        70: 600_000,
        75: 800_000,
        80: 1_000_000,
        85: 2_000_000,
        90: 3_000_000,
        92: 4_000_000,
        94: 5_000_000,
        96: 6_000_000,
        98: 7_000_000,
        100: 8_000_000,
        102: 9_000_000,
        104: 9_000_000,
        106: 9_000_000,
        108: 9_000_000,
        110: 9_000_000,
        112: 9_000_000,
        114: 9_000_000,
        116: 9_000_000,
        118: 9_000_000,
        120: 9_000_000
    },
    1: {
        70: 400_000,
        75: 600_000,
        80: 800_000,
        85: 1_000_000,
        90: 2_000_000,
        92: 3_000_000,
        94: 4_000_000,
        96: 5_000_000,
        98: 6_000_000,
        100: 7_000_000,
        102: 8_000_000,
        104: 8_000_000,
        106: 8_000_000,
        108: 8_000_000,
        110: 8_000_000,
        112: 8_000_000,
        114: 8_000_000,
        116: 8_000_000,
        118: 8_000_000,
        120: 8_000_000
    },
    2: {
        70: 600_000,
        75: 800_000,
        80: 1_000_000,
        85: 2_000_000,
        90: 3_000_000,
        92: 4_000_000,
        94: 5_000_000,
        96: 6_000_000,
        98: 7_000_000,
        100: 8_000_000,
        102: 9_000_000,
        104: 9_000_000,
        106: 9_000_000,
        108: 9_000_000,
        110: 9_000_000,
        112: 9_000_000,
        114: 9_000_000,
        116: 9_000_000,
        118: 9_000_000,
        120: 9_000_000
    },
    3: {
        75: 1_000_000,
        80: 2_000_000,
        85: 3_000_000,
        90: 4_000_000,
        92: 5_000_000,
        94: 6_000_000,
        96: 7_000_000,
        98: 8_000_000,
        100: 9_000_000,
        102: 10_000_000,
        104: 10_000_000,
        106: 10_000_000,
        108: 10_000_000,
        110: 10_000_000,
        112: 10_000_000,
        114: 10_000_000,
        116: 10_000_000,
        118: 10_000_000,
        120: 10_000_000
    },
    4: {
        85: 4_000_000,
        90: 5_000_000,
        92: 6_000_000,
        94: 7_000_000,
        96: 8_000_000,
        98: 9_000_000,
        100: 10_000_000,
        102: 12_000_000,
        104: 12_000_000,
        106: 12_000_000,
        108: 12_000_000,
        110: 12_000_000,
        112: 12_000_000,
        114: 12_000_000,
        116: 12_000_000,
        118: 12_000_000,
        120: 12_000_000
    },
    5: {
        92: 9_000_000,
        94: 10_000_000,
        96: 11_000_000,
        98: 12_000_000,
        100: 13_000_000,
        102: 15_000_000,
        104: 15_000_000,
        106: 15_000_000,
        108: 15_000_000,
        110: 15_000_000,
        112: 15_000_000,
        114: 15_000_000,
        116: 15_000_000,
        118: 15_000_000,
        120: 15_000_000
    }
};

export const NoCostCostumeOptions = new Set([
    101830,  // (53) Altera
    100550,  // (54) Nero
    201230,  // (55) Euryale
    401430,  // (56) Ushiwakamaru
    401340,  // (57) Medb
    502330,  // (58) Helena
    501230,  // (59) Nitocris
    602130,  // (60) Shuten Douji
    600930,  // (61) Serenity
    701630,  // (62) Tamamo Cat
    900130   // (64) Jeanne d'Arc
]) as ReadonlySet<number>;
