import { SearchTag } from '@fgo-planner/data-types';
import { SearchTagUtils } from '../../src/utils';

describe('SearchTagUtils.generateSearchKeywords', () => {

    it('should return an empty set for empty search tags', () => {
        const searchTags: Array<SearchTag> = [];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(0);
    });

    it('should return an empty set when all search tags are disabled', () => {
        const searchTags: Array<SearchTag> = [
            {
                value: 'Tag1',
                enabled: false
            },
            {
                value: 'Tag2',
                enabled: false
            }
        ];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(0);
    });

    it('should return a non-empty set when given a search tag', () => {
        const searchTags: Array<SearchTag> = [
            {
                value: 'Tag',
                enabled: true
            }
        ];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(1);
        expect(result.has('tag')).toStrictEqual(true);
    });

    it('should return a non-empty set when given one enabled search tag', () => {
        const searchTags: Array<SearchTag> = [
            {
                value: 'Tag1',
                enabled: false
            },
            {
                value: 'Tag2',
                enabled: true
            }
        ];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(1);
        expect(result.has('tag2')).toStrictEqual(true);
    });

    it('should return a non-empty set when given multiple enabled search tags', () => {
        const searchTags: Array<SearchTag> = [
            {
                value: 'Tag1',
                enabled: true
            },
            {
                value: 'Tag2',
                enabled: true
            },
            {
                value: 'Tag3',
                enabled: false
            },
            {
                value: 'Tag4',
                enabled: true
            },
            {
                value: 'Tag5',
                enabled: false
            }
        ];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(3);
        expect(result.has('tag1')).toStrictEqual(true);
        expect(result.has('tag2')).toStrictEqual(true);
        expect(result.has('tag4')).toStrictEqual(true);
    });

    it('should return a non-empty set when given a search tag with multiple words', () => {
        const searchTags: Array<SearchTag> = [
            {
                value: 'This tag has many words',
                enabled: true
            }
        ];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(5);
        expect(result.has('this')).toStrictEqual(true);
        expect(result.has('tag')).toStrictEqual(true);
        expect(result.has('has')).toStrictEqual(true);
        expect(result.has('many')).toStrictEqual(true);
        expect(result.has('words')).toStrictEqual(true);
    });

    it('should return a non-empty set when given a search tag with multiple words and leading and trailing whitespaces', () => {
        const searchTags: Array<SearchTag> = [
            {
                value: ' This tag has many words and has leading and trailing whitespaces ',
                enabled: true
            }
        ];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(9);
        expect(result.has('this')).toStrictEqual(true);
        expect(result.has('tag')).toStrictEqual(true);
        expect(result.has('has')).toStrictEqual(true);
        expect(result.has('many')).toStrictEqual(true);
        expect(result.has('words')).toStrictEqual(true);
        expect(result.has('and')).toStrictEqual(true);
        expect(result.has('leading')).toStrictEqual(true);
        expect(result.has('trailing')).toStrictEqual(true);
        expect(result.has('whitespaces')).toStrictEqual(true);
    });

    it('should return a non-empty set when given multiple search tags with duplicate words', () => {
        const searchTags: Array<SearchTag> = [
            {
                value: 'This is the first tag',
                enabled: true
            },
            {
                value: 'The second tag',
                enabled: true
            },
            {
                value: 'The third tag (disabled)',
                enabled: false
            },
            {
                value: 'The forth tag (with punctuation).',
                enabled: true
            }
        ];
        const result = SearchTagUtils.generateSearchKeywords(searchTags);
        expect(result.size).toStrictEqual(9);
        expect(result.has('this')).toStrictEqual(true);
        expect(result.has('is')).toStrictEqual(true);
        expect(result.has('the')).toStrictEqual(true);
        expect(result.has('first')).toStrictEqual(true);
        expect(result.has('tag')).toStrictEqual(true);
        expect(result.has('second')).toStrictEqual(true);
        expect(result.has('forth')).toStrictEqual(true);
        expect(result.has('(with')).toStrictEqual(true);
        expect(result.has('punctuation).')).toStrictEqual(true);
    });

});
