import SuggestState from './suggest-state.js';

export default class LongestPrefixPicker {
	constructor(suggestState) {
		this.suggestState = suggestState;
	}

	pick(currentQuery) {
		let longestPrefixQuery = "";
		for (let query of this.suggestState.cachedQueries) {
			if (currentQuery.startsWith(query)) {
				if (query.length > longestPrefixQuery.length)
					longestPrefixQuery = query;
			}
		}
		return longestPrefixQuery;
	}
}