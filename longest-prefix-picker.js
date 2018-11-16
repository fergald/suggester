import SuggestState from './suggest-state.js';

export default class LongestPrefixPicker {
	constructor(cache) {
		this.cache = cache;
	}

	pick(currentQuery) {
		let longestPrefixQuery = "";
		for (let query of this.cache.keys()) {
			if (currentQuery.startsWith(query)) {
				if (query.length > longestPrefixQuery.length)
					longestPrefixQuery = query;
			}
		}
		return longestPrefixQuery;
	}
}
