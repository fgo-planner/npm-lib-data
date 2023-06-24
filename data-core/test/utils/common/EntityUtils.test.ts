import { Entity } from '@fgo-planner/data-types';
import { EntityUtils } from '../../../src/utils';

describe('EntityUtils.getId', () => {

    it('should return the original string _id value', () => {
        const entity = {
            _id: 'asdf',
            field1: 'value1',
            field2: 'value2',
            field3: 'value3'
        };
        const result = EntityUtils.getId(entity);
        expect(result).toStrictEqual('asdf');
    });

    it('should return the original number _id value', () => {
        const entity = {
            _id: 1234,
            field1: 'value1',
            field2: 'value2',
            field3: 'value3'
        };
        const result = EntityUtils.getId(entity);
        expect(result).toStrictEqual(1234);
    });

});

describe('EntityUtils.getIdString', () => {

    it('should return the original string _id value', () => {
        const entity = {
            _id: 'asdf',
            field1: 'value1',
            field2: 'value2',
            field3: 'value3'
        };
        const result = EntityUtils.getIdString(entity);
        expect(result).toStrictEqual('asdf');
    });

    it('should return the number _id value converted to a string', () => {
        const entity = {
            _id: 1234,
            field1: 'value1',
            field2: 'value2',
            field3: 'value3'
        };
        const result = EntityUtils.getIdString(entity);
        expect(result).toStrictEqual('1234');
    });

});

describe('EntityUtils.getOrderedEntities', () => {

    type TestEntity<ID = number> = Entity<ID> & {
        value: string;
    };

    it('should return empty array if the given entities is empty', () => {
        const entities: Array<TestEntity> = [];
        const order = [1, 3, 5, 2, 4];
        const result = EntityUtils.getOrderedEntities(entities, order);
        expect(result).toBeDefined();
        expect(result.length).toStrictEqual(0);
    });

    it('should return empty array if the given entityMap is empty', () => {
        const entityMap = new Map<string, TestEntity>();
        const order = [1, 3, 5, 2, 4];
        const result = EntityUtils.getOrderedEntities(entityMap, order);
        expect(result).toBeDefined();
        expect(result.length).toStrictEqual(0);
    });

    it('should return all values in the given entities if the order array is empty', () => {
        const entities: Array<TestEntity> = [
            {
                _id: 1,
                value: 'test'
            },
            {
                _id: 2,
                value: 'hello'
            },
            {
                _id: 3,
                value: 'world'
            },
            {
                _id: 4,
                value: 'true'
            },
            {
                _id: 5,
                value: 'false'
            }
        ];
        const order: Array<number> = [];
        const result = EntityUtils.getOrderedEntities(entities, order);
        expect(result).toBeDefined();
        expect(result.length).toStrictEqual(5);
        expect(result[0]._id).toStrictEqual(1);
        expect(result[0].value).toStrictEqual('test');
        expect(result[1]._id).toStrictEqual(2);
        expect(result[1].value).toStrictEqual('hello');
        expect(result[2]._id).toStrictEqual(3);
        expect(result[2].value).toStrictEqual('world');
        expect(result[3]._id).toStrictEqual(4);
        expect(result[3].value).toStrictEqual('true');
        expect(result[4]._id).toStrictEqual(5);
        expect(result[4].value).toStrictEqual('false');
    });

    it('should return all values in the given entityMap if the order array is empty', () => {
        const entityMap = new Map<string, TestEntity>();
        entityMap.set('1', {
            _id: 1,
            value: 'test'
        });
        entityMap.set('2', {
            _id: 2,
            value: 'hello'
        });
        entityMap.set('3', {
            _id: 3,
            value: 'world'
        });
        entityMap.set('4', {
            _id: 4,
            value: 'true'
        });
        entityMap.set('5', {
            _id: 5,
            value: 'false'
        });
        const order: Array<number> = [];
        const result = EntityUtils.getOrderedEntities(entityMap, order);
        expect(result).toBeDefined();
        expect(result.length).toStrictEqual(5);
        expect(result[0]._id).toStrictEqual(1);
        expect(result[0].value).toStrictEqual('test');
        expect(result[1]._id).toStrictEqual(2);
        expect(result[1].value).toStrictEqual('hello');
        expect(result[2]._id).toStrictEqual(3);
        expect(result[2].value).toStrictEqual('world');
        expect(result[3]._id).toStrictEqual(4);
        expect(result[3].value).toStrictEqual('true');
        expect(result[4]._id).toStrictEqual(5);
        expect(result[4].value).toStrictEqual('false');
    });

    it('should return values from the given entities in the correct order', () => {
        const entities: Array<TestEntity> = [
            {
                _id: 1,
                value: 'test'
            },
            {
                _id: 2,
                value: 'hello'
            },
            {
                _id: 3,
                value: 'world'
            },
            {
                _id: 4,
                value: 'true'
            },
            {
                _id: 5,
                value: 'false'
            }
        ];
        const order = [1, 3, 5, 2, 4];
        const result = EntityUtils.getOrderedEntities(entities, order);
        expect(result).toBeDefined();
        expect(result.length).toStrictEqual(5);
        expect(result[0]._id).toStrictEqual(1);
        expect(result[0].value).toStrictEqual('test');
        expect(result[1]._id).toStrictEqual(3);
        expect(result[1].value).toStrictEqual('world');
        expect(result[2]._id).toStrictEqual(5);
        expect(result[2].value).toStrictEqual('false');
        expect(result[3]._id).toStrictEqual(2);
        expect(result[3].value).toStrictEqual('hello');
        expect(result[4]._id).toStrictEqual(4);
        expect(result[4].value).toStrictEqual('true');
    });

    it('should return values from the given entityMap in the correct order', () => {
        const entityMap = new Map<string, TestEntity>();
        entityMap.set('1', {
            _id: 1,
            value: 'test'
        });
        entityMap.set('2', {
            _id: 2,
            value: 'hello'
        });
        entityMap.set('3', {
            _id: 3,
            value: 'world'
        });
        entityMap.set('4', {
            _id: 4,
            value: 'true'
        });
        entityMap.set('5', {
            _id: 5,
            value: 'false'
        });
        const order = [1, 3, 5, 2, 4];
        const result = EntityUtils.getOrderedEntities(entityMap, order);
        expect(result).toBeDefined();
        expect(result.length).toStrictEqual(5);
        expect(result[0]._id).toStrictEqual(1);
        expect(result[0].value).toStrictEqual('test');
        expect(result[1]._id).toStrictEqual(3);
        expect(result[1].value).toStrictEqual('world');
        expect(result[2]._id).toStrictEqual(5);
        expect(result[2].value).toStrictEqual('false');
        expect(result[3]._id).toStrictEqual(2);
        expect(result[3].value).toStrictEqual('hello');
        expect(result[4]._id).toStrictEqual(4);
        expect(result[4].value).toStrictEqual('true');
    });

});
