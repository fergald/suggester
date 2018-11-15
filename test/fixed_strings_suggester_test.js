import {FixedStringsSuggester} from '../fixed_strings_suggester.js';
var assert = require('assert');

var SOME_STRINGS = ['gold', 'golf', 'google'];

function suggest(string) {
  return {"suggestedQuery": string};
}

describe('FixedStringsSuggester', function() {
  describe('#suggestInternal', function() {
    var suggester = new FixedStringsSuggester(SOME_STRINGS);
    it('should suggest "google" from "goo"', function(){
      assert.deepEqual([suggest('google')], suggester.suggestInternal('goo'));
    });
    it('should suggest "golf", "gold" from "gol"', function(){
      assert.deepEqual([suggest('gold'), suggest('golf')], suggester.suggestInternal('gol'));
    });
    it('should suggest everything from "g" and "go"', function(){
      var all = [suggest('gold'), suggest('golf'), suggest('google')];
      assert.deepEqual(all, suggester.suggestInternal('g'));
      assert.deepEqual(all, suggester.suggestInternal('go'));
    });
  });

  describe('#suggest', function() {
    it('should return a promise that resolves', async () => {
      var suggester = new FixedStringsSuggester(SOME_STRINGS);
      assert.deepEqual([suggest('google')], await suggester.suggestInternal('goo'));
    });
  });
});
