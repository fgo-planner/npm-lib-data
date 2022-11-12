import { PlanServant } from '@fgo-planner/data-types';
import { PlanServantUtils } from '../../../src/utils';

describe('PlanServantUtils.instantiate', () => {

    it('should instantiate a PlanServant object with default instanceId', () => {

        const result = PlanServantUtils.instantiate();

        expect(result.instanceId).toStrictEqual(0);
        expect(result.enabled).toBeDefined();
        expect(result.enabled.servant).toStrictEqual(true);
        expect(result.enabled.ascensions).toStrictEqual(true);
        expect(result.enabled.skills).toStrictEqual(true);
        expect(result.enabled.appendSkills).toStrictEqual(true);
        expect(result.enabled.costumes).toStrictEqual(true);
        expect(result.level).toBeUndefined();
        expect(result.ascension).toBeUndefined();
        expect(result.fouAtk).toBeUndefined();
        expect(result.fouHp).toBeUndefined();
        expect(result.skills).toBeDefined();
        expect(result.skills[1]).toBeUndefined();
        expect(result.skills[2]).toBeUndefined();
        expect(result.skills[3]).toBeUndefined();
        expect(result.appendSkills).toBeDefined();
        expect(result.appendSkills[1]).toBeUndefined();
        expect(result.appendSkills[2]).toBeUndefined();
        expect(result.appendSkills[3]).toBeUndefined();
    });

    it('should instantiate a PlanServant object with the given instanceId', () => {
        const testInstanceId = 69;

        const result = PlanServantUtils.instantiate(testInstanceId);

        expect(result.instanceId).toStrictEqual(testInstanceId);
        expect(result.enabled).toBeDefined();
        expect(result.enabled.servant).toStrictEqual(true);
        expect(result.enabled.ascensions).toStrictEqual(true);
        expect(result.enabled.skills).toStrictEqual(true);
        expect(result.enabled.appendSkills).toStrictEqual(true);
        expect(result.enabled.costumes).toStrictEqual(true);
        expect(result.level).toBeUndefined();
        expect(result.ascension).toBeUndefined();
        expect(result.fouAtk).toBeUndefined();
        expect(result.fouHp).toBeUndefined();
        expect(result.skills).toBeDefined();
        expect(result.skills[1]).toBeUndefined();
        expect(result.skills[2]).toBeUndefined();
        expect(result.skills[3]).toBeUndefined();
        expect(result.appendSkills).toBeDefined();
        expect(result.appendSkills[1]).toBeUndefined();
        expect(result.appendSkills[2]).toBeUndefined();
        expect(result.appendSkills[3]).toBeUndefined();
    });

});

describe('PlanServantUtils.clone', () => {

    it('should deep clone the given PlanServant object', () => {

        const testPlanServant: PlanServant = {
            instanceId: 69,
            enabled: {
                servant: true,
                ascensions: false,
                skills: true,
                appendSkills: true,
                costumes: false
            },
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

        const result = PlanServantUtils.clone(testPlanServant);

        // Cloned objects should be a separate instance
        expect(result).not.toBe(testPlanServant);
        expect(result.enabled).not.toBe(testPlanServant.enabled);
        expect(result.skills).toBeDefined();
        expect(result.skills).not.toBe(testPlanServant.skills);
        expect(result.appendSkills).toBeDefined();
        expect(result.appendSkills).not.toBe(testPlanServant.appendSkills);

        expect(result.instanceId).toStrictEqual(69);
        expect(result.enabled).toBeDefined();
        expect(result.enabled.servant).toStrictEqual(true);
        expect(result.enabled.ascensions).toStrictEqual(false);
        expect(result.enabled.skills).toStrictEqual(true);
        expect(result.enabled.appendSkills).toStrictEqual(true);
        expect(result.enabled.costumes).toStrictEqual(false);
        expect(result.level).toStrictEqual(80);
        expect(result.ascension).toStrictEqual(4);
        expect(result.fouAtk).toStrictEqual(1000);
        expect(result.fouHp).toStrictEqual(1000);
        expect(result.skills[1]).toStrictEqual(6);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toStrictEqual(1);
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toBeUndefined();
    });

});

describe('PlanServantUtils.isEqual', () => {

    it('should return false due to mismatched enabled.servant', () => {

        const a: PlanServant = {
            instanceId: 1,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const b: PlanServant = {
            instanceId: 2,
            enabled: {
                servant: false,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const result = PlanServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched enabled.ascensions', () => {

        const a: PlanServant = {
            instanceId: 1,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const b: PlanServant = {
            instanceId: 2,
            enabled: {
                servant: true,
                ascensions: false,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const result = PlanServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched enabled.skills', () => {

        const a: PlanServant = {
            instanceId: 1,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const b: PlanServant = {
            instanceId: 2,
            enabled: {
                servant: true,
                ascensions: true,
                skills: false,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const result = PlanServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched enabled.appendSkills', () => {

        const a: PlanServant = {
            instanceId: 1,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const b: PlanServant = {
            instanceId: 2,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: false,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const result = PlanServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched enabled.costumes', () => {

        const a: PlanServant = {
            instanceId: 1,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            skills: {},
            appendSkills: {}
        };

        const b: PlanServant = {
            instanceId: 2,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: false
            },
            skills: {},
            appendSkills: {}
        };

        const result = PlanServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return false due to mismatched enhancements', () => {

        const a: PlanServant = {
            instanceId: 1,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            ascension: 3,
            level: 69,
            skills: {},
            appendSkills: {}
        };

        const b: PlanServant = {
            instanceId: 2,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            ascension: 4,
            level: 80,
            skills: {},
            appendSkills: {}
        };

        const result = PlanServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(false);
    });

    it('should return true if equal', () => {

        const a: PlanServant = {
            instanceId: 1,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            ascension: 4,
            level: 80,
            skills: {},
            appendSkills: {}
        };

        const b: PlanServant = {
            instanceId: 2,
            enabled: {
                servant: true,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: true
            },
            ascension: 4,
            level: 80,
            skills: {},
            appendSkills: {}
        };

        const result = PlanServantUtils.isEqual(a, b);
        expect(result).toStrictEqual(true);
    });

});
