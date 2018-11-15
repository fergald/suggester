import SuggestCache from  '../suggest-cache.js';

let assert = require('assert');

describe('SuggestCache', function() {
  describe('#put', function() {
  	it('should save key and values stored', function() {
  		let cache = new SuggestCache();
  		let keys = ["a", "b", "c"];
  		let values = ["aa", "bb", "cc"];
  		for (let i = 0; i < keys.length; ++i) {
  			cache.put(keys[i], values[i]);
  		}
  		assert.deepEqual(keys, cache.keys);
  			for (let i = 0; i < keys.length; ++i) {
  			assert.deepEqual(values[i], cache.get(keys[i]));
  		}
  	});

  	it('should override things with same key', function() {
  		let cache = new SuggestCache();
  		cache.put("a", "foo");
  		cache.put("a", "bar");
  		assert.deepEqual("bar", cache.get("a"));
  	});
  });
});