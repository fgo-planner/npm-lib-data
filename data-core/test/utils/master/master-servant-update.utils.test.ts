import { ReadonlyRecord } from '@fgo-planner/common-core';
import { MasterServant_1100900, MasterServant_201300, MasterServant_504400 } from '@fgo-planner/data-test-resources';
import { MasterServantBondLevel } from '@fgo-planner/data-types';
import { MasterServantConstants } from '../../../src/constants';
import { ExistingMasterServantUpdate, ImportedMasterServantUpdate, MasterServantUpdateIndeterminateValue as IndeterminateValue, NewMasterServantUpdate, MasterServantUpdateBoolean } from '../../../src/types';
import { MasterServantUpdateUtils, MasterServantUtils } from '../../../src/utils';

describe('MasterServantUpdateUtils.createNew', () => {

    it('should instantiate a NewMasterServantUpdate object with expected default values', () => {

        const result = MasterServantUpdateUtils.createNew();

        expect(result.type).toStrictEqual('New');
        expect(result.gameId).toStrictEqual(MasterServantConstants.DefaultServantId);
        expect(result.summoned).toStrictEqual(MasterServantUpdateBoolean.True);
        expect(result.summonDate).toBeNull();
        expect(result.np).toStrictEqual(MasterServantConstants.MinLevel);
        expect(result.ascension).toStrictEqual(MasterServantConstants.MinAscensionLevel);
        expect(result.skills[1]).toStrictEqual(MasterServantConstants.MinSkillLevel);
        expect(result.skills[2]).toBeNull();
        expect(result.skills[3]).toBeNull();
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toBeNull();
        expect(result.appendSkills[3]).toBeNull();
        expect(result.bondLevel).toBeNull();
        expect(result.unlockedCostumes.size).toStrictEqual(0);
    });

    it('should instantiate a NewMasterServantUpdate object with correct bond value', () => {

        const bondLevels: ReadonlyRecord<number, MasterServantBondLevel> = {
            [MasterServantConstants.DefaultServantId]: 5,
            201300: 10,
            504400: 9,
            1100900: 12
        };

        const unlockedCostumes: Array<number> = [];

        const result = MasterServantUpdateUtils.createNew(bondLevels, unlockedCostumes);

        expect(result.type).toStrictEqual('New');
        expect(result.gameId).toStrictEqual(MasterServantConstants.DefaultServantId);
        expect(result.summoned).toStrictEqual(MasterServantUpdateBoolean.True);
        expect(result.summonDate).toBeNull();
        expect(result.np).toStrictEqual(MasterServantConstants.MinLevel);
        expect(result.ascension).toStrictEqual(MasterServantConstants.MinAscensionLevel);
        expect(result.skills[1]).toStrictEqual(MasterServantConstants.MinSkillLevel);
        expect(result.skills[2]).toBeNull();
        expect(result.skills[3]).toBeNull();
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toBeNull();
        expect(result.appendSkills[3]).toBeNull();
        expect(result.bondLevel).toStrictEqual(5);
        expect(result.unlockedCostumes.size).toStrictEqual(0);
    });

    it('should instantiate a NewMasterServantUpdate object with expected costume IDs', () => {

        const bondLevels: ReadonlyRecord<number, MasterServantBondLevel> = {};

        const unlockedCostumes: Array<number> = [
            300440,
            400130,
            400430
        ];

        const result = MasterServantUpdateUtils.createNew(bondLevels, unlockedCostumes);

        expect(result.type).toStrictEqual('New');
        expect(result.gameId).toStrictEqual(MasterServantConstants.DefaultServantId);
        expect(result.summoned).toStrictEqual(MasterServantUpdateBoolean.True);
        expect(result.summonDate).toBeNull();
        expect(result.np).toStrictEqual(MasterServantConstants.MinLevel);
        expect(result.ascension).toStrictEqual(MasterServantConstants.MinAscensionLevel);
        expect(result.skills[1]).toStrictEqual(MasterServantConstants.MinSkillLevel);
        expect(result.skills[2]).toBeNull();
        expect(result.skills[3]).toBeNull();
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toBeNull();
        expect(result.appendSkills[3]).toBeNull();
        expect(result.bondLevel).toBeNull();
        expect(result.unlockedCostumes).toBeDefined();
        expect(result.unlockedCostumes?.size).toStrictEqual(3);
        expect(result.unlockedCostumes?.get(300440)).toStrictEqual(MasterServantUpdateBoolean.Indeterminate);
        expect(result.unlockedCostumes?.get(400130)).toStrictEqual(MasterServantUpdateBoolean.Indeterminate);
        expect(result.unlockedCostumes?.get(400430)).toStrictEqual(MasterServantUpdateBoolean.Indeterminate);
    });

});

describe('MasterServantUpdateUtils.createFromExisting', () => {

    it('should instantiate an ExistingMasterServantUpdate object when given a MasterServant', () => {

        const masterServant = MasterServant_1100900;

        const result = MasterServantUpdateUtils.createFromExisting(masterServant);

        expect(result.type).toStrictEqual('Existing');
        expect(result.gameId).toStrictEqual(1100900);
        expect(result.summoned).toStrictEqual(MasterServantUpdateBoolean.True);
        expect(result.summonDate).toStrictEqual(1662940800000);
        expect(result.np).toStrictEqual(4);
        expect(result.level).toStrictEqual(106);
        expect(result.ascension).toStrictEqual(4);
        expect(result.skills[1]).toStrictEqual(10);
        expect(result.skills[2]).toStrictEqual(10);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toStrictEqual(1);
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toStrictEqual(1);
        expect(result.bondLevel).toBeNull();
        expect(result.unlockedCostumes.size).toStrictEqual(0);
    });

    it('should instantiate an ExistingMasterServantUpdate object with correct bond value when given a MasterServant', () => {

        const masterServant = MasterServant_1100900;

        const bondLevels: ReadonlyRecord<number, MasterServantBondLevel> = {
            [MasterServantConstants.DefaultServantId]: 5,
            201300: 10,
            504400: 9,
            1100900: 12
        };

        const unlockedCostumes: Array<number> = [];

        const result = MasterServantUpdateUtils.createFromExisting(masterServant, bondLevels, unlockedCostumes);

        expect(result.type).toStrictEqual('Existing');
        expect(result.gameId).toStrictEqual(1100900);
        expect(result.summoned).toStrictEqual(MasterServantUpdateBoolean.True);
        expect(result.summonDate).toStrictEqual(1662940800000);
        expect(result.np).toStrictEqual(4);
        expect(result.level).toStrictEqual(106);
        expect(result.ascension).toStrictEqual(4);
        expect(result.skills[1]).toStrictEqual(10);
        expect(result.skills[2]).toStrictEqual(10);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toStrictEqual(1);
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toStrictEqual(1);
        expect(result.bondLevel).toStrictEqual(12);
        expect(result.unlockedCostumes.size).toStrictEqual(0);
    });

    it('should instantiate an ExistingMasterServantUpdate object when given an array with one MasterServant', () => {

        const masterServants = [
            MasterServant_1100900
        ];

        const bondLevels: ReadonlyRecord<number, MasterServantBondLevel> = {
            [MasterServantConstants.DefaultServantId]: 5,
            201300: 10,
            504400: 9,
            1100900: 12
        };

        const unlockedCostumes: Array<number> = [];

        const result = MasterServantUpdateUtils.createFromExisting(masterServants, bondLevels, unlockedCostumes);

        expect(result.type).toStrictEqual('Existing');
        expect(result.gameId).toStrictEqual(1100900);
        expect(result.summoned).toStrictEqual(MasterServantUpdateBoolean.True);
        expect(result.summonDate).toStrictEqual(1662940800000);
        expect(result.np).toStrictEqual(4);
        expect(result.level).toStrictEqual(106);
        expect(result.ascension).toStrictEqual(4);
        expect(result.skills[1]).toStrictEqual(10);
        expect(result.skills[2]).toStrictEqual(10);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toStrictEqual(1);
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toStrictEqual(1);
        expect(result.bondLevel).toStrictEqual(12);
        expect(result.unlockedCostumes.size).toStrictEqual(0);
    });

    it('should instantiate an ExistingMasterServantUpdate object when given an array with multiple MasterServant', () => {

        const masterServants = [
            MasterServant_201300,
            MasterServant_504400,
            MasterServant_1100900
        ];

        const bondLevels: ReadonlyRecord<number, MasterServantBondLevel> = {
            [MasterServantConstants.DefaultServantId]: 5,
            201300: 10,
            504400: 9,
            1100900: 12
        };

        const unlockedCostumes: Array<number> = [
            300440,
            400130,
            400430
        ];

        const result = MasterServantUpdateUtils.createFromExisting(masterServants, bondLevels, unlockedCostumes);

        expect(result.type).toStrictEqual('Existing');
        expect(result.gameId).toStrictEqual(IndeterminateValue);
        expect(result.summoned).toStrictEqual(MasterServantUpdateBoolean.True);
        expect(result.summonDate).toStrictEqual(1662940800000);
        expect(result.np).toStrictEqual(IndeterminateValue);
        expect(result.level).toStrictEqual(IndeterminateValue);
        expect(result.ascension).toStrictEqual(IndeterminateValue);
        expect(result.skills[1]).toStrictEqual(IndeterminateValue);
        expect(result.skills[2]).toStrictEqual(IndeterminateValue);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toStrictEqual(IndeterminateValue);
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toStrictEqual(IndeterminateValue);
        expect(result.bondLevel).toStrictEqual(IndeterminateValue);
        expect(result.unlockedCostumes.size).toStrictEqual(3);
        expect(result.unlockedCostumes.get(300440)).toStrictEqual(MasterServantUpdateBoolean.Indeterminate);
        expect(result.unlockedCostumes.get(400130)).toStrictEqual(MasterServantUpdateBoolean.Indeterminate);
        expect(result.unlockedCostumes.get(400430)).toStrictEqual(MasterServantUpdateBoolean.Indeterminate);
    });

});

describe('MasterServantUpdateUtils.applyToMasterServant', () => {

    it('should not update the gameId value for existing servant update', () => {

        const masterServant = MasterServantUtils.clone(MasterServant_1100900);

        const update: ExistingMasterServantUpdate = {
            type: 'Existing',
            gameId: 12345,
            summoned: MasterServantUpdateBoolean.Indeterminate,
            summonDate: IndeterminateValue,
            np: IndeterminateValue,
            level: IndeterminateValue,
            ascension: IndeterminateValue,
            fouAtk: IndeterminateValue,
            fouHp: IndeterminateValue,
            skills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            appendSkills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            bondLevel: IndeterminateValue,
            unlockedCostumes: new Map()
        };

        MasterServantUpdateUtils.applyToMasterServant(update, masterServant);

        expect(masterServant.gameId).toStrictEqual(1100900);
    });

    it('should update the gameId value for new servant update', () => {

        const masterServant = MasterServantUtils.clone(MasterServant_1100900);

        const update: ImportedMasterServantUpdate = {
            type: 'Imported',
            gameId: 12345,
            summoned: MasterServantUpdateBoolean.Indeterminate,
            summonDate: IndeterminateValue,
            np: IndeterminateValue,
            level: IndeterminateValue,
            ascension: IndeterminateValue,
            fouAtk: IndeterminateValue,
            fouHp: IndeterminateValue,
            skills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            appendSkills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            bondLevel: IndeterminateValue,
            unlockedCostumes: new Map()
        };

        MasterServantUpdateUtils.applyToMasterServant(update, masterServant);

        expect(masterServant.gameId).toStrictEqual(12345);
    });

    it('should update the gameId value for new servant update', () => {

        const masterServant = MasterServantUtils.clone(MasterServant_1100900);

        const update: NewMasterServantUpdate = {
            type: 'New',
            gameId: 12345,
            summoned: MasterServantUpdateBoolean.Indeterminate,
            summonDate: IndeterminateValue,
            np: IndeterminateValue,
            level: IndeterminateValue,
            ascension: IndeterminateValue,
            fouAtk: IndeterminateValue,
            fouHp: IndeterminateValue,
            skills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            appendSkills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            bondLevel: IndeterminateValue,
            unlockedCostumes: new Map()
        };

        MasterServantUpdateUtils.applyToMasterServant(update, masterServant);

        expect(masterServant.gameId).toStrictEqual(12345);
    });

    it('should update summoned and summonDate', () => {

        const masterServant = MasterServantUtils.clone(MasterServant_1100900);

        const update: ExistingMasterServantUpdate = {
            type: 'Existing',
            gameId: IndeterminateValue,
            summoned: MasterServantUpdateBoolean.False,
            summonDate: null,
            np: IndeterminateValue,
            level: IndeterminateValue,
            ascension: IndeterminateValue,
            fouAtk: IndeterminateValue,
            fouHp: IndeterminateValue,
            skills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            appendSkills: {
                1: IndeterminateValue,
                2: IndeterminateValue,
                3: IndeterminateValue
            },
            bondLevel: IndeterminateValue,
            unlockedCostumes: new Map()
        };

        const bondLevels: ReadonlyRecord<number, MasterServantBondLevel> = {
            201300: 10,
            504400: 9,
            1100900: 12
        };

        MasterServantUpdateUtils.applyToMasterServant(update, masterServant, bondLevels);

        expect(masterServant.gameId).toStrictEqual(1100900);
        expect(masterServant.summoned).toStrictEqual(false);
        expect(masterServant.summonDate).toBeUndefined();
        expect(masterServant.np).toStrictEqual(4);
        expect(masterServant.level).toStrictEqual(106);
        expect(masterServant.ascension).toStrictEqual(4);
        expect(masterServant.fouAtk).toStrictEqual(2000);
        expect(masterServant.fouHp).toStrictEqual(2000);
        expect(masterServant.skills[1]).toStrictEqual(10);
        expect(masterServant.skills[2]).toStrictEqual(10);
        expect(masterServant.skills[3]).toStrictEqual(10);
        expect(masterServant.appendSkills[1]).toStrictEqual(1);
        expect(masterServant.appendSkills[2]).toStrictEqual(10);
        expect(masterServant.appendSkills[3]).toStrictEqual(1);
        expect(bondLevels[1100900]).toStrictEqual(12);
    });


    it('should update everything except summoned and summonDate', () => {

        const masterServant = MasterServantUtils.clone(MasterServant_1100900);

        const update: ExistingMasterServantUpdate = {
            type: 'Existing',
            gameId: IndeterminateValue,
            summoned: MasterServantUpdateBoolean.Indeterminate,
            summonDate: IndeterminateValue,
            np: 1,
            level: 69,
            ascension: 2,
            fouAtk: 500,
            fouHp: 600,
            skills: {
                1: 1,
                2: 2,
                3: 3
            },
            appendSkills: {
                1: 4,
                2: 5,
                3: 6
            },
            bondLevel: 7,
            unlockedCostumes: new Map()
        };

        const bondLevels: ReadonlyRecord<number, MasterServantBondLevel> = {
            201300: 10,
            504400: 9,
            1100900: 12
        };

        MasterServantUpdateUtils.applyToMasterServant(update, masterServant, bondLevels);

        expect(masterServant.gameId).toStrictEqual(1100900);
        expect(masterServant.summoned).toStrictEqual(true);
        expect(masterServant.summonDate).toEqual(new Date(1662940800000));
        expect(masterServant.np).toStrictEqual(1);
        expect(masterServant.level).toStrictEqual(69);
        expect(masterServant.ascension).toStrictEqual(2);
        expect(masterServant.fouAtk).toStrictEqual(500);
        expect(masterServant.fouHp).toStrictEqual(600);
        expect(masterServant.skills[1]).toStrictEqual(1);
        expect(masterServant.skills[2]).toStrictEqual(2);
        expect(masterServant.skills[3]).toStrictEqual(3);
        expect(masterServant.appendSkills[1]).toStrictEqual(4);
        expect(masterServant.appendSkills[2]).toStrictEqual(5);
        expect(masterServant.appendSkills[3]).toStrictEqual(6);
        expect(bondLevels[1100900]).toStrictEqual(7);
    });

});
