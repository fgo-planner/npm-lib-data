import { MasterServantAscensionLevel, MasterServantBondLevel, MasterServantNoblePhantasmLevel, MasterServantSkillLevel } from '@fgo-planner/data-types';

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

/**
 * OG Artoria. For use when instantiating new servant data.
 */
export const DefaultServantId = 100100;
