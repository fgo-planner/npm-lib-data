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
    [GameServantClass.MoonCancer]: 'Moon Cancer',
    [GameServantClass.Foreigner]: GameServantClass.Foreigner,
    [GameServantClass.BeastI]: 'Beast I',
    [GameServantClass.BeastII]: 'Beast II',
    [GameServantClass.BeastIIIR]: 'Beast III/R',
    [GameServantClass.BeastIIIL]: 'Beast III/L',
    [GameServantClass.BeastFalse]: 'Beast (False)',
    [GameServantClass.Pretender]: GameServantClass.Pretender,
    [GameServantClass.Unknown]: GameServantClass.Unknown
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
