import SuggestCache from './suggest-cache.js'

export class SuggestState {
	constructor(inputElement) {
		this.cache = SuggestCache();
		this.currentQuery = "";
		this.inputElement = inputElement;
	}
}