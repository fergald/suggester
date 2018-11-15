import SuggestState from './suggest-state.js'

export class LongestPrefixPicker {
	constructor(suggestState) {
		this.suggestState = suggestState;
	}

	pick(currentQuery) {
		for (let key in suggestState.cache.keys()) {
			if (key)
				return key;
		}
	}
}