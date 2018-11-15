import {FixedStringsSuggester} from '../fixed_strings_suggester.js';
var assert = require('assert');

var SOME_STRINGS = ['gold', 'golf', 'google'];

describe('FixedStringsSuggester', function() {
  describe('#suggestInternal', function() {
    var suggester = new FixedStringsSuggester(SOME_STRINGS);
    it('should suggest "google" from "goo"', function(){
      assert.deepEqual(['google'], suggester.suggestInternal('goo'));
    });
    it('should suggest "golf", "gold" from "gol"', function(){
      assert.deepEqual(['gold', 'golf'], suggester.suggestInternal('gol'));
    });
    it('should suggest everything from "g" and "go"', function(){
      assert.deepEqual(SOME_STRINGS, suggester.suggestInternal('g'));
      assert.deepEqual(SOME_STRINGS, suggester.suggestInternal('go'));
    });
  });

  describe('#suggest', function() {
    it('should return a promise that resolves', async () => {
      var suggester = new FixedStringsSuggester(SOME_STRINGS);
      assert.deepEqual(['google'], await suggester.suggestInternal('goo'));
    });
  });
});
