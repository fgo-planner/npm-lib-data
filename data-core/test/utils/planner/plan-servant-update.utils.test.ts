import { PlanServant_1, PlanServant_2 } from '@fgo-planner/data-test-resources';
import { PlanServant } from '@fgo-planner/data-types';
import { PlanServantUpdate, InstantiatedServantUpdateBoolean, InstantiatedServantUpdateIndeterminateValue as IndeterminateValue } from '../../../src/types';
import { PlanServantUpdateUtils } from '../../../src/utils';

describe('PlanServantUpdateUtils.createNew', () => {

    it('should instantiate a PlanServantUpdate object with expected default values', () => {

        const result = PlanServantUpdateUtils.createNew();

        expect(result.enabled.servant).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.ascensions).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.skills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.appendSkills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.costumes).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.level).toBeNull();
        expect(result.ascension).toBeNull();
        expect(result.fouAtk).toBeNull();
        expect(result.fouHp).toBeNull();
        expect(result.skills[1]).toBeNull();
        expect(result.skills[2]).toBeNull();
        expect(result.skills[3]).toBeNull();
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toBeNull();
        expect(result.appendSkills[3]).toBeNull();
        expect(result.costumes.size).toStrictEqual(0);
    });

    it('should instantiate a PlanServantUpdate object with costume IDs', () => {

        const costumes: Array<number> = [
            300440,
            400130,
            400430
        ];

        const result = PlanServantUpdateUtils.createNew(costumes);

        expect(result.enabled.servant).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.ascensions).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.skills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.appendSkills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.costumes).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.level).toBeNull();
        expect(result.ascension).toBeNull();
        expect(result.fouAtk).toBeNull();
        expect(result.fouHp).toBeNull();
        expect(result.skills[1]).toBeNull();
        expect(result.skills[2]).toBeNull();
        expect(result.skills[3]).toBeNull();
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toBeNull();
        expect(result.appendSkills[3]).toBeNull();
        expect(result.costumes.size).toStrictEqual(3);
        expect(result.costumes.get(300440)).toStrictEqual(true);
        expect(result.costumes.get(400130)).toStrictEqual(true);
        expect(result.costumes.get(400430)).toStrictEqual(true);
    });

});

describe('PlanServantUpdateUtils.createFromExisting', () => {

    it('should instantiate an PlanServantUpdate object when given a PlanServant', () => {

        const planServant = PlanServant_1;

        const result = PlanServantUpdateUtils.createFromExisting(planServant);

        expect(result.enabled.servant).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.ascensions).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.skills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.appendSkills).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.costumes).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.level).toBeNull();
        expect(result.ascension).toBeNull();
        expect(result.fouAtk).toBeNull();
        expect(result.fouHp).toStrictEqual(1000);
        expect(result.skills[1]).toStrictEqual(9);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toBeNull();
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toBeNull();
        expect(result.appendSkills[3]).toBeNull();
        expect(result.costumes.size).toStrictEqual(0);
    });

    it('should instantiate an PlanServantUpdate object with costume IDs when given a PlanServant', () => {

        const planServant = PlanServant_2;

        const costumes: Array<number> = [
            300440,
            400130,
            400430
        ];

        const result = PlanServantUpdateUtils.createFromExisting(planServant, costumes);

        expect(result.enabled.servant).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.ascensions).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.skills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.appendSkills).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.costumes).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.level).toBeNull();
        expect(result.ascension).toBeNull();
        expect(result.fouAtk).toBeNull();
        expect(result.fouHp).toBeNull();
        expect(result.skills[1]).toStrictEqual(9);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toBeNull();
        expect(result.costumes.size).toStrictEqual(3);
        expect(result.costumes.get(300440)).toStrictEqual(true);
        expect(result.costumes.get(400130)).toStrictEqual(true);
        expect(result.costumes.get(400430)).toStrictEqual(true);
    });

    it('should instantiate an PlanServantUpdate object when given an array with one PlanServant', () => {

        const planServants = [
            PlanServant_2
        ];

        const costumes: Array<number> = [];

        const result = PlanServantUpdateUtils.createFromExisting(planServants, costumes);

        expect(result.enabled.servant).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.ascensions).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.skills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.appendSkills).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.costumes).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.level).toBeNull();
        expect(result.ascension).toBeNull();
        expect(result.fouAtk).toBeNull();
        expect(result.fouHp).toBeNull();
        expect(result.skills[1]).toStrictEqual(9);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toBeNull();
        expect(result.costumes.size).toStrictEqual(0);
    });

    it('should instantiate an PlanServantUpdate object with costume IDs when given an array with one PlanServant', () => {

        const planServants = [
            PlanServant_2
        ];

        const costumes: Array<number> = [
            300440,
            400130,
            400430
        ];

        const result = PlanServantUpdateUtils.createFromExisting(planServants, costumes);

        expect(result.enabled.servant).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.ascensions).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.skills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.appendSkills).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.costumes).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.level).toBeNull();
        expect(result.ascension).toBeNull();
        expect(result.fouAtk).toBeNull();
        expect(result.fouHp).toBeNull();
        expect(result.skills[1]).toStrictEqual(9);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toStrictEqual(10);
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toStrictEqual(10);
        expect(result.appendSkills[3]).toBeNull();
        expect(result.costumes.size).toStrictEqual(3);
        expect(result.costumes.get(300440)).toStrictEqual(true);
        expect(result.costumes.get(400130)).toStrictEqual(true);
        expect(result.costumes.get(400430)).toStrictEqual(true);
    });

    it('should instantiate an PlanServantUpdate object when given an array with multiple PlanServant', () => {

        const planServants = [
            PlanServant_1,
            PlanServant_2
        ];

        const costumes: Array<number> = [
            300440,
            400130,
            400430
        ];

        const result = PlanServantUpdateUtils.createFromExisting(planServants, costumes);

        expect(result.enabled.servant).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.ascensions).toStrictEqual(InstantiatedServantUpdateBoolean.Indeterminate);
        expect(result.enabled.skills).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.enabled.appendSkills).toStrictEqual(InstantiatedServantUpdateBoolean.False);
        expect(result.enabled.costumes).toStrictEqual(InstantiatedServantUpdateBoolean.True);
        expect(result.level).toStrictEqual(IndeterminateValue);
        expect(result.ascension).toStrictEqual(IndeterminateValue);
        expect(result.fouAtk).toBeNull();
        expect(result.fouHp).toStrictEqual(IndeterminateValue);
        expect(result.skills[1]).toStrictEqual(9);
        expect(result.skills[2]).toStrictEqual(9);
        expect(result.skills[3]).toStrictEqual(IndeterminateValue);
        expect(result.appendSkills[1]).toBeNull();
        expect(result.appendSkills[2]).toStrictEqual(IndeterminateValue);
        expect(result.appendSkills[3]).toBeNull();
        expect(result.costumes.size).toStrictEqual(3);
        expect(result.costumes.get(300440)).toStrictEqual(true);
        expect(result.costumes.get(400130)).toStrictEqual(true);
        expect(result.costumes.get(400430)).toStrictEqual(true);
    });

});

describe('PlanServantUpdateUtils.applyToPlanServant', () => {

    it('should update target costumes', () => {

        const planServant: PlanServant = {
            instanceId: 69,
            enabled: {
                servant: false,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: false
            },
            skills: {

            },
            appendSkills: {

            }
        };

        const targetCostumes = new Set([
            300440,
            400130,
            400430
        ]);

        const update: PlanServantUpdate = {
            enabled: {
                servant: InstantiatedServantUpdateBoolean.Indeterminate,
                ascensions: InstantiatedServantUpdateBoolean.Indeterminate,
                skills: InstantiatedServantUpdateBoolean.Indeterminate,
                appendSkills: InstantiatedServantUpdateBoolean.Indeterminate,
                costumes: InstantiatedServantUpdateBoolean.Indeterminate
            },
            level: null,
            ascension: null,
            fouAtk: null,
            fouHp: null,
            skills: {
                1: null,
                2: null,
                3: null
            },
            appendSkills: {
                1: null,
                2: null,
                3: null
            },
            costumes: new Map([[300440, false], [400430, true], [6969, true], [420, false]])
        };

        PlanServantUpdateUtils.applyToPlanServant(update, planServant, targetCostumes);

        expect(targetCostumes.size).toStrictEqual(3);
        expect(targetCostumes.has(300440)).toStrictEqual(false);
        expect(targetCostumes.has(400130)).toStrictEqual(true);
        expect(targetCostumes.has(400430)).toStrictEqual(true);
        expect(targetCostumes.has(6969)).toStrictEqual(true);
        expect(targetCostumes.has(420)).toStrictEqual(false);
    });

    it('should not update any fields', () => {

        const planServant: PlanServant = {
            instanceId: 69,
            enabled: {
                servant: false,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: false
            },
            level: 69,
            ascension: 2,
            fouAtk: 500,
            skills: {
                1: 4
            },
            appendSkills: {
                2: 10
            }
        };

        const update: PlanServantUpdate = {
            enabled: {
                servant: InstantiatedServantUpdateBoolean.Indeterminate,
                ascensions: InstantiatedServantUpdateBoolean.Indeterminate,
                skills: InstantiatedServantUpdateBoolean.Indeterminate,
                appendSkills: InstantiatedServantUpdateBoolean.Indeterminate,
                costumes: InstantiatedServantUpdateBoolean.Indeterminate
            },
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
            costumes: new Map()
        };

        const targetCostumes = new Set([
            300440,
            400130,
            400430
        ]);

        PlanServantUpdateUtils.applyToPlanServant(update, planServant, targetCostumes);

        expect(planServant.instanceId).toStrictEqual(69);
        expect(planServant.enabled.servant).toStrictEqual(false);
        expect(planServant.enabled.ascensions).toStrictEqual(true);
        expect(planServant.enabled.skills).toStrictEqual(true);
        expect(planServant.enabled.appendSkills).toStrictEqual(true);
        expect(planServant.enabled.costumes).toStrictEqual(false);
        expect(planServant.level).toStrictEqual(69);
        expect(planServant.ascension).toStrictEqual(2);
        expect(planServant.fouAtk).toStrictEqual(500);
        expect(planServant.fouHp).toBeUndefined();
        expect(planServant.skills[1]).toStrictEqual(4);
        expect(planServant.skills[2]).toBeUndefined();
        expect(planServant.skills[3]).toBeUndefined();
        expect(planServant.appendSkills[1]).toBeUndefined();
        expect(planServant.appendSkills[2]).toStrictEqual(10);
        expect(planServant.appendSkills[3]).toBeUndefined();

        expect(targetCostumes.size).toStrictEqual(3);
        expect(targetCostumes.has(300440)).toStrictEqual(true);
        expect(targetCostumes.has(400130)).toStrictEqual(true);
        expect(targetCostumes.has(400430)).toStrictEqual(true);
    });

    it('should update enabled fields', () => {

        const planServant: PlanServant = {
            instanceId: 69,
            enabled: {
                servant: false,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: false
            },
            skills: {

            },
            appendSkills: {

            }
        };

        const update: PlanServantUpdate = {
            enabled: {
                servant: InstantiatedServantUpdateBoolean.True,
                ascensions: InstantiatedServantUpdateBoolean.True,
                skills: InstantiatedServantUpdateBoolean.Indeterminate,
                appendSkills: InstantiatedServantUpdateBoolean.False,
                costumes: InstantiatedServantUpdateBoolean.False
            },
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
            costumes: new Map()
        };

        PlanServantUpdateUtils.applyToPlanServant(update, planServant);

        expect(planServant.instanceId).toStrictEqual(69);
        expect(planServant.enabled.servant).toStrictEqual(true);
        expect(planServant.enabled.ascensions).toStrictEqual(true);
        expect(planServant.enabled.skills).toStrictEqual(true);
        expect(planServant.enabled.appendSkills).toStrictEqual(false);
        expect(planServant.enabled.costumes).toStrictEqual(false);
        expect(planServant.level).toBeUndefined();
        expect(planServant.ascension).toBeUndefined();
        expect(planServant.fouAtk).toBeUndefined();
        expect(planServant.fouHp).toBeUndefined();
        expect(planServant.skills[1]).toBeUndefined();
        expect(planServant.skills[2]).toBeUndefined();
        expect(planServant.skills[3]).toBeUndefined();
        expect(planServant.appendSkills[1]).toBeUndefined();
        expect(planServant.appendSkills[2]).toBeUndefined();
        expect(planServant.appendSkills[3]).toBeUndefined();
    });

    it('should update enhancement fields', () => {

        const planServant: PlanServant = {
            instanceId: 69,
            enabled: {
                servant: false,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: false
            },
            level: 7,
            ascension: 0,
            fouAtk: 200,
            fouHp: 50,
            skills: {
                1: 1,
                2: 1,
                3: 1
            },
            appendSkills: {
            }
        };

        const update: PlanServantUpdate = {
            enabled: {
                servant: InstantiatedServantUpdateBoolean.Indeterminate,
                ascensions: InstantiatedServantUpdateBoolean.Indeterminate,
                skills: InstantiatedServantUpdateBoolean.Indeterminate,
                appendSkills: InstantiatedServantUpdateBoolean.Indeterminate,
                costumes: InstantiatedServantUpdateBoolean.Indeterminate
            },
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
            costumes: new Map()
        };

        PlanServantUpdateUtils.applyToPlanServant(update, planServant);

        expect(planServant.instanceId).toStrictEqual(69);
        expect(planServant.enabled.servant).toStrictEqual(false);
        expect(planServant.enabled.ascensions).toStrictEqual(true);
        expect(planServant.enabled.skills).toStrictEqual(true);
        expect(planServant.enabled.appendSkills).toStrictEqual(true);
        expect(planServant.enabled.costumes).toStrictEqual(false);
        expect(planServant.level).toStrictEqual(69);
        expect(planServant.ascension).toStrictEqual(2);
        expect(planServant.fouAtk).toStrictEqual(500);
        expect(planServant.fouHp).toStrictEqual(600);
        expect(planServant.skills[1]).toStrictEqual(1);
        expect(planServant.skills[2]).toStrictEqual(2);
        expect(planServant.skills[3]).toStrictEqual(3);
        expect(planServant.appendSkills[1]).toStrictEqual(4);
        expect(planServant.appendSkills[2]).toStrictEqual(5);
        expect(planServant.appendSkills[3]).toStrictEqual(6);
    });

    it('should update enhancement fields to undefined', () => {

        const planServant: PlanServant = {
            instanceId: 69,
            enabled: {
                servant: false,
                ascensions: true,
                skills: true,
                appendSkills: true,
                costumes: false
            },
            level: 7,
            ascension: 0,
            fouAtk: 200,
            fouHp: 50,
            skills: {
                1: 1,
                2: 1,
                3: 1
            },
            appendSkills: {
                2: 1
            }
        };

        const update: PlanServantUpdate = {
            enabled: {
                servant: InstantiatedServantUpdateBoolean.Indeterminate,
                ascensions: InstantiatedServantUpdateBoolean.Indeterminate,
                skills: InstantiatedServantUpdateBoolean.Indeterminate,
                appendSkills: InstantiatedServantUpdateBoolean.Indeterminate,
                costumes: InstantiatedServantUpdateBoolean.Indeterminate
            },
            level: null,
            ascension: null,
            fouAtk: null,
            fouHp: null,
            skills: {
                1: null,
                2: null,
                3: null
            },
            appendSkills: {
                1: null,
                2: null,
                3: null
            },
            costumes: new Map()
        };

        PlanServantUpdateUtils.applyToPlanServant(update, planServant);

        expect(planServant.instanceId).toStrictEqual(69);
        expect(planServant.enabled.servant).toStrictEqual(false);
        expect(planServant.enabled.ascensions).toStrictEqual(true);
        expect(planServant.enabled.skills).toStrictEqual(true);
        expect(planServant.enabled.appendSkills).toStrictEqual(true);
        expect(planServant.enabled.costumes).toStrictEqual(false);
        expect(planServant.level).toBeUndefined();
        expect(planServant.ascension).toBeUndefined();
        expect(planServant.fouAtk).toBeUndefined();
        expect(planServant.fouHp).toBeUndefined();
        expect(planServant.skills[1]).toBeUndefined();
        expect(planServant.skills[2]).toBeUndefined();
        expect(planServant.skills[3]).toBeUndefined();
        expect(planServant.appendSkills[1]).toBeUndefined();
        expect(planServant.appendSkills[2]).toBeUndefined();
        expect(planServant.appendSkills[3]).toBeUndefined();
    });

});
