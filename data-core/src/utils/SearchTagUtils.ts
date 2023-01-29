import { SearchTag } from '@fgo-planner/data-types';
import { CollectionUtils } from '@fgo-planner/common-core';

const SplitRegex = /\s+/;

/**
 * Generates a set of strings using the given search tags. Only tags that are
 * enabled are included. Words that are present in multiple tags will only be
 * included once. All string in the returned case will be converted to lower
 * case.
 */
export function generateSearchKeywords(searchTags: Array<SearchTag>): ReadonlySet<string> {
    if (!searchTags.length) {
        return CollectionUtils.emptySet();
    }
    const result = new Set<string>();
    for (const searchTag of searchTags) {
        if (!searchTag.enabled) {
            continue;
        }
        const terms = searchTag.value.trim().split(SplitRegex);
        for (const term of terms) {
            result.add(term.toLowerCase());
        }
    }
    return result;
}
