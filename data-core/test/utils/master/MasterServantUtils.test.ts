import { MasterServant } from '@fgo-planner/data-types';
import { InstantiatedServantConstants, MasterServantConstants } from '../../../src/constants';
import { MasterServantUtils } from '../../../src/utils';

describe('MasterServantUtils.instantiate', () => {

    it('should instantiate a MasterServant object with default instanceId', () => {

        const result = MasterServantUtils.instantiate();

        expect(result.instanceId).toStrictEqual(0);
        expect(result.gameId).toStrictEqual(MasterServantConstants.DefaultServantId);
        expect(result.summoned).toStrictEqual(true);
        expect(result.summonDate).toBeUndefined();
        expect(result.np).toStrictEqual(InstantiatedServantConstants.MinNoblePhantasmLevel);
        expect(result.level).toStrictEqual(InstantiatedServantConstants.MinLevel);
        expect(result.ascension).toStrictEqual(InstantiatedServantConstants.MinAscensionLevel);
        expect(result.fouHp).toBeUndefined();
        expect(result.fouAtk).toBeUndefined();
        expect(result.skills[1]).toStrictEqual(InstantiatedServantConstants.MinSkillLevel);
        expect(result.skills[2]).toBeUndefined();
        expect(result.skills[3]).toBeUndefined();
        expect(result.appendSkills[1]).toBeUndefined();
        expect(result.appendSkills[2]).toBeUndefined();
        expect(result.appendSkills[3]).toBeUndefined();
    });

    it('should instantiate a MasterServant object with the given instanceId', () => {
        const testInstanceId = 69;

        const result = MasterServantUtils.instantiate(testInstanceId);

        expect(result.instanceId).toStrictEqual(testInstanceId);
        expect(result.gameId).toStrictEqual(MasterServantConstants.DefaultServantId);
        expect(result.summoned).toStrictEqual(true);
        expect(result.summonDate).toBeUndefined();
        expect(result.np).toStrictEqual(InstantiatedServantConstants.MinNoblePhantasmLevel);
        expect(result.level).toStrictEqual(InstantiatedServantConstants.MinLevel);
        expect(result.ascension).toStrictEqual(InstantiatedServantConstants.MinAscensionLevel);
        expect(result.fouHp).toBeUndefined();
        expect(result.fouAtk).toBeUndefined();
        expect(result.skills[1]).toStrictEqual(InstantiatedServantConstants.MinSkillLevel);
        expect(result.skills[2]).toBeUndefined();
        expect(result.skills[3]).toBeUndefined();
        expect(result.appendSkills[1]).toBeUndefined();
        expect(result.appendSkills[2]).toBeUndefined();
        expect(result.appendSkills[3]).toBeUndefined();
    });

});

describe('MasterServantUtils.clone', () => {

    it('should deep clone the given MasterServant object', () => {

        const testMasterServant: MasterServant = {
            instanceId: 69,
            gameId: 100100,
            summoned: true,
            np: 5,
            level: 80,
            ascension: 4,
            fouAtk: 1000,
            fouHp: 1000,
            skills: {
                1: 6,
                2: 9,
                3: 10
            },
            appendSkills: {
                1: 1,
                2: 10
            }
        };

        const result = MasterServantUtils.clone(testMasterServant);

        // Cloned objects should be a separate instance
        expect(result).not.toBe(testMasterServant);
        expect(result.skills).not.toBe(testMasterServant.skills);
        expect(result.appendSkills).not.toBe(testMasterServant.appendSkills);

        expect(result.instanceId).toStrictEqual(69);
        expect(result.gameId).toStrictEqual(100100);
        expect(result.summoned).toStrictEqual(true);
        expect(result.summonDate).toBeUndefined();
        expect(result.np).toStrictEqual(5);
        expect(result.level).toStrictEqual(80);
        expect(result.ascension).toStrictEqual(4);
        expect(result.fouHp).toStrictEqual(1000);
        expect(result.fouAtk).toStrictEqual(1000);
        expect(result.skills[1]).toStrictEqual(6);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toStrictEqual(1);
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toBeUndefined();
    });

    it('should deep clone the given MasterServant object with summon date', () => {

        const testMasterServant: MasterServant = {
            instanceId: 69,
            gameId: 100100,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 5,
            level: 80,
            ascension: 4,
            fouAtk: 1000,
            fouHp: 1000,
            skills: {
                1: 6,
                2: 9,
                3: 10
            },
            appendSkills: {
                1: 1,
                2: 10
            }
        };

        const result = MasterServantUtils.clone(testMasterServant);

        // Cloned objects should be a separate instance
        expect(result).not.toBe(testMasterServant);
        expect(result.skills).not.toBe(testMasterServant.skills);
        expect(result.appendSkills).not.toBe(testMasterServant.appendSkills);
        expect(result.summonDate).not.toBe(testMasterServant.summonDate);

        expect(result.instanceId).toStrictEqual(69);
        expect(result.gameId).toStrictEqual(100100);
        expect(result.summoned).toStrictEqual(true);
        expect(result.summonDate).toBeDefined();
        expect(result.summonDate!.getTime()).toStrictEqual(1574294400000);
        expect(result.np).toStrictEqual(5);
        expect(result.level).toStrictEqual(80);
        expect(result.ascension).toStrictEqual(4);
        expect(result.fouHp).toStrictEqual(1000);
        expect(result.fouAtk).toStrictEqual(1000);
        expect(result.skills[1]).toStrictEqual(6);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toStrictEqual(1);
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toBeUndefined();
    });

});

describe('MasterServantUtils.getLastInstanceId', () => {

    it('should return 0 for empty input array', () => {
        const testMasterServants: Array<MasterServant> = [];

        const result = MasterServantUtils.getLastInstanceId(testMasterServants);
        expect(result).toStrictEqual(0);
    });

    it('should return largest instanceId for test input array', () => {

        const testMasterServants: Array<MasterServant> = [
            {
                instanceId: 1,
                gameId: 100100,
                summoned: true,
                np: 5,
                level: 80,
                ascension: 4,
                skills: {
                    1: 9,
                    2: 9,
                    3: 9
                },
                appendSkills: {}
            },
            {
                instanceId: 69,
                gameId: 100300,
                summoned: true,
                np: 3,
                level: 80,
                ascension: 4,
                skills: {
                    1: 9,
                    2: 9,
                    3: 9
                },
                appendSkills: {}
            },
            {
                instanceId: 2,
                gameId: 100200,
                summoned: true,
                np: 2,
                level: 80,
                ascension: 4,
                fouAtk: 1000,
                fouHp: 1000,
                skills: {
                    1: 10,
                    2: 10,
                    3: 10
                },
                appendSkills: {}
            }
        ];

        const result = MasterServantUtils.getLastInstanceId(testMasterServants);
        expect(result).toStrictEqual(69);
    });

});

describe('MasterServantUtils.isEqual', () => {

    it('should return false due to mismatched summoned flag', () => {

        const a: MasterServant = {
            gameId: 100100,
            instanceId: 1,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 1,
            level: 80,
            ascension: 4,
            skills: {
                1: 1
            },
            appendSkills: {}
        };

        const b: MasterServant = {
            gameId: 100200,
            instanceId: 2,
            summoned: false,
            np: 1,
            level: 80,
            ascension: 4,
            skills: {
                1: 1
            },
            appendSkills: {}
        };

        const result = MasterServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched summon date', () => {

        const a: MasterServant = {
            gameId: 100100,
            instanceId: 1,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 1,
            level: 80,
            ascension: 4,
            skills: {
                1: 1
            },
            appendSkills: {}
        };

        const b: MasterServant = {
            gameId: 100200,
            instanceId: 2,
            summoned: true,
            summonDate: new Date(1574294300000),
            np: 1,
            level: 80,
            ascension: 4,
            skills: {
                1: 1
            },
            appendSkills: {}
        };

        const result = MasterServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched NP level', () => {

        const a: MasterServant = {
            gameId: 100100,
            instanceId: 1,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 1,
            level: 80,
            ascension: 4,
            skills: {
                1: 1
            },
            appendSkills: {}
        };

        const b: MasterServant = {
            gameId: 100200,
            instanceId: 2,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 2,
            level: 80,
            ascension: 4,
            skills: {
                1: 1
            },
            appendSkills: {}
        };

        const result = MasterServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched enhancements', () => {

        const a: MasterServant = {
            gameId: 100100,
            instanceId: 1,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 1,
            level: 80,
            ascension: 4,
            skills: {
                1: 1
            },
            appendSkills: {}
        };

        const b: MasterServant = {
            gameId: 100200,
            instanceId: 2,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 1,
            level: 80,
            ascension: 4,
            fouAtk: 1000,
            fouHp: 1000,
            skills: {
                1: 10,
                2: 10,
                3: 10
            },
            appendSkills: {
                1: 10,
                2: 10,
                3: 10
            }
        };

        const result = MasterServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return true if equal', () => {

        const a: MasterServant = {
            gameId: 100100,
            instanceId: 1,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 1,
            level: 80,
            ascension: 4,
            fouAtk: 1000,
            fouHp: 1000,
            skills: {
                1: 10,
                2: 10,
                3: 10
            },
            appendSkills: {
                1: 10,
                2: 10,
                3: 10
            }
        };

        const b: MasterServant = {
            gameId: 100200,
            instanceId: 2,
            summoned: true,
            summonDate: new Date(1574294400000),
            np: 1,
            level: 80,
            ascension: 4,
            fouAtk: 1000,
            fouHp: 1000,
            skills: {
                1: 10,
                2: 10,
                3: 10
            },
            appendSkills: {
                1: 10,
                2: 10,
                3: 10
            }
        };

        const result = MasterServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(true);
    });

});
