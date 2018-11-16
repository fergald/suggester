import LongestPrefixPicker from '../longest-prefix-picker.js';

let assert = require('assert');

class FakeCache {
	constructor(cachedQueries) {
		this.cachedQueries = cachedQueries;
	}

  keys() {
    return this.cachedQueries;
  }
}

describe('LongestPrefixPicker', function() {
  describe('#pick', function() {
    it('should pick empty string when there are no cached query that is a prefix', function() {
    	let fakeCache = new FakeCache(["g", "go", "goo"]);
      let picker = new LongestPrefixPicker(fakeCache);
      assert.deepEqual("", picker.pick("x"));
    });
    it('should pick "go", when current query is "got" and cached queries are "g", "go", "goo"', function() {
    	let fakeCache = new FakeCache(["g", "go", "goo"]);
      let picker = new LongestPrefixPicker(fakeCache);
      assert.deepEqual("go", picker.pick("got"));
    });
    it('should pick "g", when current query is "gap" and cached queries are "g", "go", "goo"', function() {
    	let fakeCache = new FakeCache(["g", "go", "goo"]);
      let picker = new LongestPrefixPicker(fakeCache);
      assert.deepEqual("g", picker.pick("gap"));
    });
  });
});
