export class SuggestCache {
	constructor() {
		cache = {};
	}

	get keys() {
		return this.cache.keys();
	}

	get(key) {
		return this.cache[key];
	}

	put(key, value) {
		this.cache[key] = value;
	}
}