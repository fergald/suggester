import LongestPrefixPicker from '../longest-prefix-picker.js';

let assert = require('assert');

class FakeSuggestState {
	constructor(cachedQueries) {
		this.cachedQueries = cachedQueries;
	}
}

describe('LongestPrefixPicker', function() {
  describe('#pick', function() {
    it('should pick the longest prefix of a query', function() {
    	let fakeSuggestState = new FakeSuggestState(["g", "go", "goo"]);
      let picker = new LongestPrefixPicker(fakeSuggestState);
      assert.deepEqual("", picker.pick("x"));
      assert.deepEqual("go", picker.pick("got"));
      assert.deepEqual("g", picker.pick("gap"));
    });
  });
});