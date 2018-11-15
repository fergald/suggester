import SuggestCache from './suggest-cache.js';

export default class SuggestState {
	constructor(inputElement) {
		console.log("Make SuggestState");
		this.cache = new SuggestCache();
		this.currentQuery = "";
		this.inputElement = inputElement;
	}

	addSuggestionSet(query, suggestionSet) {
		this.cache.put(query, suggestionSet);
	}
}