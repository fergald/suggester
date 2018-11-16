import SuggestState from '../suggest-state.js';
import SuggestCache from '../suggest-cache.js';
import FixedStringsSuggester from '../fixed_strings_suggester.js';
import LongestPrefixPicker from '../longest-prefix-picker.js';

var SOME_STRINGS = ['gold', 'golf', 'google'];

var assert = require('assert');

class MockRenderer {
  constructor() {
  }

  render(suggestions) {
    this.suggestions = suggestions;
  }
}

describe('SuggestState', function() {
  describe('#', function() {
    let cache = new SuggestCache();
    let suggester = new FixedStringsSuggester(SOME_STRINGS);
    let picker = new LongestPrefixPicker(cache);
    let renderer = new MockRenderer();
    let suggestState = new SuggestState(
      cache, "inputElement", suggester, picker, renderer);
    suggestState.newQuery('goo');
  });
});
