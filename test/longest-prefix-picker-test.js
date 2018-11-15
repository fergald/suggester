import LongestPrefixPicker from '../longest-prefix-picker.js';

let assert = require('assert');

class FakeSuggestState {
	constructor(cachedQueries) {
		this.cachedQueries = cachedQueries;
	}
}

describe('LongestPrefixPicker', function() {
  describe('#pick', function() {
    it('should pick empty string when there are no cached query that is a prefix', function() {
    	let fakeSuggestState = new FakeSuggestState(["g", "go", "goo"]);
      let picker = new LongestPrefixPicker(fakeSuggestState);
      assert.deepEqual("", picker.pick("x"));
    });
    it('should pick "go", when current query is "got" and cached queries are "g", "go", "goo"', function() {
    	let fakeSuggestState = new FakeSuggestState(["g", "go", "goo"]);
      let picker = new LongestPrefixPicker(fakeSuggestState);
      assert.deepEqual("go", picker.pick("got"));
    });
    it('should pick "g", when current query is "gap" and cached queries are "g", "go", "goo"', function() {
    	let fakeSuggestState = new FakeSuggestState(["g", "go", "goo"]);
      let picker = new LongestPrefixPicker(fakeSuggestState);
      assert.deepEqual("g", picker.pick("gap"));
    });
  });
});