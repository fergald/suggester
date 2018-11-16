import SuggestCache from './suggest-cache.js';

export default class SuggestState {
	constructor(cache, inputElement, suggester, picker, renderer) {
		this.cache = cache;
		this.currentQuery = "";
		this.inputElement = inputElement;
    this.suggester = suggester;
    this.picker = picker;
    this.renderer = renderer;
	}

	get cachedQueries() {
		return this.cache.keys();
	}

	suggestionsFor(query) {
		return this.cache.get(query);
	}

  newQuery(query) {
    let p = this.suggester.suggest(query);
    p.then((suggestions) => {
      this.addSuggestionSet(query, suggestions);
    });
  }

	addSuggestionSet(query, suggestionSet) {
		this.cache.put(query, suggestionSet);
    let picked = this.picker.pick(query);
    this.renderer.render(this.suggestionsFor(picked));
	}
}
