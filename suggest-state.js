import SuggestCache from './suggest-cache.js';

export default class SuggestState {
	constructor(inputElement, suggester, picker, renderer) {
		console.log("Make SuggestState");
		this.cache = new SuggestCache();
		this.currentQuery = "";
		this.inputElement = inputElement;
    this.suggester = suggester;
    this.picker = picker;
    this.renderer = renderer;
	}

	get cachedQueries() {
		return cache.keys;
	}

	suggestionsFor(query) {
		return cache.get(query);
	}

  newQuery(query) {
    let p = this.suggester.suggest(query);
    console.log("p=", p);
    p.then((suggestions) => {
      addSuggestionSet(query, suggestions);
    });
  }

	addSuggestionSet(query, suggestionSet) {
		this.cache.put(query, suggestionSet);
    let picked = picker.pick(query);
    renderer.render(suggestionsFor(picked));
	}
}
