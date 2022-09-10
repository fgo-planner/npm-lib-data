import { ReadonlyRecord } from '@fgo-planner/common-types';
import { GameServantClass, GameServantRarity, MasterServantAscensionLevel, MasterServantBondLevel, MasterServantNoblePhantasmLevel, MasterServantSkillLevel } from '@fgo-planner/data-types';

export const ClassDisplayNameMap = {
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
} as ReadonlyRecord<GameServantClass, string>;

export const MinLevel = 1;

export const MaxLevel = 120;

export const MinFou = 0;

export const MaxFou = 2000;

export const MinAscensionLevel = 0;

export const MaxAscensionLevel = 4;

export const AscensionLevels = Array.from(Array(5).keys()) as ReadonlyArray<MasterServantAscensionLevel>;

export const MinSkillLevel = 1;

export const MaxSkillLevel = 10;

export const SkillLevels = Array.from(Array(10).keys()).map(i => i + 1) as ReadonlyArray<MasterServantSkillLevel>;

export const MinNoblePhantasmLevel = 1;

export const MaxNoblePhantasmLevel = 5;

export const NoblePhantasmLevels = Array.from(Array(5).keys()).map(i => i + 1) as ReadonlyArray<MasterServantNoblePhantasmLevel>;

export const MinBondLevel = 0;

export const MaxBondLevel = 15;

export const BondLevels = Array.from(Array(16).keys()) as ReadonlyArray<MasterServantBondLevel>;

export const MinRarity = 0;

export const MaxRarity = 5;

export const RarityValues = Array.from(Array(6).keys()) as ReadonlyArray<GameServantRarity>;

/**
 * OG Artoria. For use when instantiating new servant data.
 */
export const DefaultServantId = 100100;
