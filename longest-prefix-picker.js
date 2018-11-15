import SuggestState from './suggest-state.js';

export default class LongestPrefixPicker {
	constructor(suggestState) {
		this.suggestState = suggestState;
	}

	pick(currentQuery) {
		let longestPrefixQuery = "";
		console.log(this.suggestState.cache.keys);
		for (let query of this.suggestState.cache.keys) {
			console.log("pick " + currentQuery + " iterating over " + query);
			if (currentQuery.startsWith(query)) {
				if (query.length > longestPrefixQuery.length)
					longestPrefixQuery = query;
			}
		}
		return longestPrefixQuery;
	}
}