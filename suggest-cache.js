export default class SuggestCache {
	constructor() {
		this.cache = {};
	}

	keys() {
		return Object.keys(this.cache);
	}

	get(key) {
		return this.cache[key];
	}

	put(key, value) {
		this.cache[key] = value;
	}
}
