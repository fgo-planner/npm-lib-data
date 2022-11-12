import { GameServant_1100900, GameServant_201300, GameServant_504400 } from '@fgo-planner/data-test-resources';
import { InstantiatedServantConstants } from '../../../src/constants';
import { InstantiatedServantUtils } from '../../../src/utils';

describe('InstantiatedServantUtils.getArtStage', () => {

    it('should return 1 for ascension level 0', () => {
        const result = InstantiatedServantUtils.getArtStage(0);
        expect(result).toStrictEqual(1);
    });

    it('should return 2 for ascension level 1', () => {
        const result = InstantiatedServantUtils.getArtStage(1);
        expect(result).toStrictEqual(2);
    });

    it('should return 2 for ascension level 2', () => {
        const result = InstantiatedServantUtils.getArtStage(2);
        expect(result).toStrictEqual(2);
    });

    it('should return 3 for ascension level 3', () => {
        const result = InstantiatedServantUtils.getArtStage(3);
        expect(result).toStrictEqual(3);
    });

    it('should return 4 for ascension level 4', () => {
        const result = InstantiatedServantUtils.getArtStage(4);
        expect(result).toStrictEqual(4);
    });

});

describe('InstantiatedServantUtils.roundToNearestValidFouValue', () => {

    it(`should return ${InstantiatedServantConstants.MinFou} for a negative value`, () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(-1);
        expect(result).toStrictEqual(InstantiatedServantConstants.MinFou);
    });

    it(`should return ${InstantiatedServantConstants.MinFou} for an input value of ${InstantiatedServantConstants.MinFou}`, () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(InstantiatedServantConstants.MinFou);
        expect(result).toStrictEqual(InstantiatedServantConstants.MinFou);
    });

    it('should return 200 for an input value of 200', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(200);
        expect(result).toStrictEqual(200);
    });

    it('should return 200 for an input value of 201', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(201);
        expect(result).toStrictEqual(200);
    });

    it('should return 210 for an input value of 205', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(205);
        expect(result).toStrictEqual(210);
    });

    it('should return 210 for an input value of 209', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(209);
        expect(result).toStrictEqual(210);
    });

    it('should return 1000 for an input value of 1000', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(1000);
        expect(result).toStrictEqual(1000);
    });

    it('should return 1200 for an input value of 1200', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(1200);
        expect(result).toStrictEqual(1200);
    });

    it('should return 1200 for an input value of 1201', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(1201);
        expect(result).toStrictEqual(1200);
    });

    it('should return 1220 for an input value of 1210', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(1210);
        expect(result).toStrictEqual(1220);
    });

    it('should return 1220 for an input value of 1219', () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(1219);
        expect(result).toStrictEqual(1220);
    });

    it(`should return ${InstantiatedServantConstants.MaxFou} for an input value of ${InstantiatedServantConstants.MaxFou}`, () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(InstantiatedServantConstants.MaxFou);
        expect(result).toStrictEqual(InstantiatedServantConstants.MaxFou);
    });

    // eslint-disable-next-line max-len
    it(`should return ${InstantiatedServantConstants.MaxFou} for an input value that is greater than ${InstantiatedServantConstants.MaxFou}`, () => {
        const result = InstantiatedServantUtils.roundToNearestValidFouValue(InstantiatedServantConstants.MaxFou + 500);
        expect(result).toStrictEqual(InstantiatedServantConstants.MaxFou);
    });

});

describe('InstantiatedServantUtils.roundToNearestValidAscensionLevel', () => {

    describe('for a 1* servant', () => {

        it('should return 4 for an input value of 0 and a level greater than 50', () => {
            const level = 51;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 4 for an input value of 4 and a level greater than 50', () => {
            const level = 51;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 4 for an input value of 4 and a level of 50', () => {
            const level = 50;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 3 for an input value of 3 and a level of 50', () => {
            const level = 50;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 0 and a level between 40 and 50', () => {
            const level = 45;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 3 and a level between 40 and 50', () => {
            const level = 45;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 4 and a level between 40 and 50', () => {
            const level = 45;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 3 and a level of 40', () => {
            const level = 40;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 2 for an input value of 2 and a level of 40', () => {
            const level = 40;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 0 and a level between 30 and 40', () => {
            const level = 35;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 2 and a level between 30 and 40', () => {
            const level = 35;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 4 and a level between 30 and 40', () => {
            const level = 35;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 2 and a level of 30', () => {
            const level = 30;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 1 for an input value of 1 and a level of 30', () => {
            const level = 30;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 0 and a level between 20 and 30', () => {
            const level = 25;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 1 and a level between 20 and 30', () => {
            const level = 25;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 4 and a level between 20 and 30', () => {
            const level = 25;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 1 and a level of 20', () => {
            const level = 20;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 0 for an input value of 0 and a level of 20', () => {
            const level = 20;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

        it('should return 0 for an input value of 0 and a level less than 20', () => {
            const level = 19;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

        it('should return 0 for an input value of 4 and a level less than 20', () => {
            const level = 19;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

    });

    describe('for a 2* servant', () => {

        it('should return 4 for an input value of 0 and a level greater than 55', () => {
            const level = 56;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 4 for an input value of 4 and a level greater than 55', () => {
            const level = 56;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 4 for an input value of 4 and a level of 55', () => {
            const level = 55;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 3 for an input value of 3 and a level of 55', () => {
            const level = 55;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 0 and a level between 45 and 55', () => {
            const level = 50;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 3 and a level between 45 and 55', () => {
            const level = 50;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 4 and a level between 45 and 55', () => {
            const level = 50;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 3 and a level of 45', () => {
            const level = 45;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 2 for an input value of 2 and a level of 45', () => {
            const level = 45;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 0 and a level between 35 and 45', () => {
            const level = 40;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 2 and a level between 35 and 45', () => {
            const level = 40;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 4 and a level between 35 and 45', () => {
            const level = 40;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 2 and a level of 35', () => {
            const level = 35;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 1 for an input value of 1 and a level of 35', () => {
            const level = 35;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 0 and a level between 25 and 35', () => {
            const level = 30;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 1 and a level between 25 and 35', () => {
            const level = 30;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 4 and a level between 25 and 35', () => {
            const level = 30;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 1 and a level of 25', () => {
            const level = 25;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 0 for an input value of 0 and a level of 25', () => {
            const level = 25;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

        it('should return 0 for an input value of 0 and a level less than 25', () => {
            const level = 24;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

        it('should return 0 for an input value of 4 and a level less than 25', () => {
            const level = 24;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

    });

    describe('for a 5* servant', () => {

        it('should return 4 for an input value of 0 and a level greater than 80', () => {
            const level = 81;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 4 for an input value of 4 and a level greater than 80', () => {
            const level = 81;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 4 for an input value of 4 and a level of 80', () => {
            const level = 80;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(4);
        });

        it('should return 3 for an input value of 3 and a level of 80', () => {
            const level = 80;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 0 and a level between 70 and 80', () => {
            const level = 75;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 3 and a level between 70 and 80', () => {
            const level = 75;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 4 and a level between 70 and 80', () => {
            const level = 75;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 3 for an input value of 3 and a level of 70', () => {
            const level = 70;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(3);
        });

        it('should return 2 for an input value of 2 and a level of 70', () => {
            const level = 70;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 0 and a level between 60 and 70', () => {
            const level = 69;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 2 and a level between 60 and 70', () => {
            const level = 69;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 4 and a level between 60 and 70', () => {
            const level = 69;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 2 for an input value of 2 and a level of 60', () => {
            const level = 60;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(2);
        });

        it('should return 1 for an input value of 1 and a level of 60', () => {
            const level = 60;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 0 and a level between 50 and 60', () => {
            const level = 55;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 1 and a level between 50 and 60', () => {
            const level = 55;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 4 and a level between 50 and 60', () => {
            const level = 55;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 1 for an input value of 1 and a level of 50', () => {
            const level = 50;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

        it('should return 0 for an input value of 0 and a level of 50', () => {
            const level = 50;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

        it('should return 0 for an input value of 0 and a level less than 50', () => {
            const level = 49;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

        it('should return 0 for an input value of 4 and a level less than 50', () => {
            const level = 49;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidAscensionLevel(level, ascension, testGameServant.maxLevel);
            expect(result).toStrictEqual(0);
        });

    });

});

describe('InstantiatedServantUtils.roundToNearestValidLevel', () => {

    describe('for a 1* servant', () => {

        it('should return 60 for an input value of 60 and ascension 4', () => {
            const level = 60;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(60);
        });

        it('should return 50 for an input value of 50 and ascension 4', () => {
            const level = 50;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 50 for an input value of 1 and ascension 4', () => {
            const level = 1;
            const ascension = 4;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 50 for an input value of 60 and ascension 3', () => {
            const level = 60;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 50 for an input value of 50 and ascension 3', () => {
            const level = 50;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 45 for an input value of 45 (between 40 and 50) and ascension 3', () => {
            const level = 45;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(45);
        });

        it('should return 40 for an input value of 40 and ascension 3', () => {
            const level = 40;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(40);
        });

        it('should return 40 for an input value of 1 and ascension 3', () => {
            const level = 1;
            const ascension = 3;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(40);
        });

        it('should return 40 for an input value of 60 and ascension 2', () => {
            const level = 60;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(40);
        });

        it('should return 40 for an input value of 40 and ascension 2', () => {
            const level = 40;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(40);
        });

        it('should return 35 for an input value of 35 (between 30 and 40) and ascension 2', () => {
            const level = 35;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(35);
        });

        it('should return 30 for an input value of 30 and ascension 2', () => {
            const level = 30;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(30);
        });

        it('should return 30 for an input value of 1 and ascension 2', () => {
            const level = 1;
            const ascension = 2;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(30);
        });

        it('should return 30 for an input value of 60 and ascension 1', () => {
            const level = 60;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(30);
        });

        it('should return 30 for an input value of 30 and ascension 1', () => {
            const level = 30;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(30);
        });

        it('should return 25 for an input value of 25 (between 20 and 30) and ascension 1', () => {
            const level = 25;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(25);
        });

        it('should return 20 for an input value of 20 and ascension 1', () => {
            const level = 20;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(20);
        });

        it('should return 20 for an input value of 1 and ascension 1', () => {
            const level = 1;
            const ascension = 1;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(20);
        });

        it('should return 20 for an input value of 60 and ascension 0', () => {
            const level = 60;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(20);
        });

        it('should return 20 for an input value of 20 and ascension 0', () => {
            const level = 20;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(20);
        });

        it('should return 1 for an input value of 1 and ascension 0', () => {
            const level = 1;
            const ascension = 0;
            const testGameServant = GameServant_201300;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

    });

    describe('for a 2* servant', () => {

        it('should return 65 for an input value of 65 and ascension 4', () => {
            const level = 65;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(65);
        });

        it('should return 55 for an input value of 55 and ascension 4', () => {
            const level = 55;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(55);
        });

        it('should return 55 for an input value of 1 and ascension 4', () => {
            const level = 1;
            const ascension = 4;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(55);
        });

        it('should return 55 for an input value of 65 and ascension 3', () => {
            const level = 65;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(55);
        });

        it('should return 55 for an input value of 55 and ascension 3', () => {
            const level = 55;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(55);
        });

        it('should return 50 for an input value of 50 (between 45 and 55) and ascension 3', () => {
            const level = 50;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 45 for an input value of 45 and ascension 3', () => {
            const level = 45;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(45);
        });

        it('should return 45 for an input value of 1 and ascension 3', () => {
            const level = 1;
            const ascension = 3;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(45);
        });

        it('should return 45 for an input value of 65 and ascension 2', () => {
            const level = 65;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(45);
        });

        it('should return 45 for an input value of 45 and ascension 2', () => {
            const level = 45;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(45);
        });

        it('should return 40 for an input value of 40 (between 35 and 45) and ascension 2', () => {
            const level = 40;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(40);
        });

        it('should return 35 for an input value of 35 and ascension 2', () => {
            const level = 35;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(35);
        });

        it('should return 35 for an input value of 1 and ascension 2', () => {
            const level = 1;
            const ascension = 2;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(35);
        });

        it('should return 35 for an input value of 65 and ascension 1', () => {
            const level = 65;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(35);
        });

        it('should return 35 for an input value of 35 and ascension 1', () => {
            const level = 35;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(35);
        });

        it('should return 30 for an input value of 30 (between 25 and 35) and ascension 1', () => {
            const level = 30;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(30);
        });

        it('should return 25 for an input value of 25 and ascension 1', () => {
            const level = 25;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(25);
        });

        it('should return 25 for an input value of 1 and ascension 1', () => {
            const level = 1;
            const ascension = 1;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(25);
        });

        it('should return 25 for an input value of 65 and ascension 0', () => {
            const level = 65;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(25);
        });

        it('should return 25 for an input value of 25 and ascension 0', () => {
            const level = 25;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(25);
        });

        it('should return 1 for an input value of 1 and ascension 0', () => {
            const level = 1;
            const ascension = 0;
            const testGameServant = GameServant_504400;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

    });

    describe('for a 5* servant', () => {

        it('should return 90 for an input value of 90 and ascension 4', () => {
            const level = 90;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(90);
        });

        it('should return 80 for an input value of 80 and ascension 4', () => {
            const level = 80;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(80);
        });

        it('should return 80 for an input value of 1 and ascension 4', () => {
            const level = 1;
            const ascension = 4;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(80);
        });

        it('should return 80 for an input value of 90 and ascension 3', () => {
            const level = 90;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(80);
        });

        it('should return 80 for an input value of 80 and ascension 3', () => {
            const level = 80;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(80);
        });

        it('should return 75 for an input value of 75 (between 70 and 80) and ascension 3', () => {
            const level = 75;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(75);
        });

        it('should return 70 for an input value of 70 and ascension 3', () => {
            const level = 70;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(70);
        });

        it('should return 70 for an input value of 1 and ascension 3', () => {
            const level = 1;
            const ascension = 3;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(70);
        });

        it('should return 70 for an input value of 90 and ascension 2', () => {
            const level = 90;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(70);
        });

        it('should return 70 for an input value of 70 and ascension 2', () => {
            const level = 70;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(70);
        });

        it('should return 65 for an input value of 65 (between 60 and 70) and ascension 2', () => {
            const level = 65;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(65);
        });

        it('should return 60 for an input value of 60 and ascension 2', () => {
            const level = 60;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(60);
        });

        it('should return 60 for an input value of 1 and ascension 2', () => {
            const level = 1;
            const ascension = 2;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(60);
        });

        it('should return 60 for an input value of 90 and ascension 1', () => {
            const level = 90;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(60);
        });

        it('should return 60 for an input value of 60 and ascension 1', () => {
            const level = 60;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(60);
        });

        it('should return 55 for an input value of 55 (between 50 and 60) and ascension 1', () => {
            const level = 55;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(55);
        });

        it('should return 50 for an input value of 50 and ascension 1', () => {
            const level = 50;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 50 for an input value of 1 and ascension 1', () => {
            const level = 1;
            const ascension = 1;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 50 for an input value of 90 and ascension 0', () => {
            const level = 90;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 50 for an input value of 50 and ascension 0', () => {
            const level = 50;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(50);
        });

        it('should return 1 for an input value of 1 and ascension 0', () => {
            const level = 1;
            const ascension = 0;
            const testGameServant = GameServant_1100900;
            const result = InstantiatedServantUtils.roundToNearestValidLevel(ascension, level, testGameServant.maxLevel);
            expect(result).toStrictEqual(1);
        });

    });

});