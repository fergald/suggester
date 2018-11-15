import {FixedStringsSuggester} from '../fixed_strings_suggester.js';

var assert = require('assert');
describe('FixedStringsSuggester', function() {
  describe('#suggestInternal', function() {
    it('should suggest "google" from "goo"', function(){
      var suggester = new FixedStringsSuggester(['gold', 'golf', 'google']);
      assert.deepEqual(["google"], suggester.suggestInternal('goo'));
    });
  });

  describe('#suggest', function() {
    it('should return a promise that resolves', async () => {
      var suggester = new FixedStringsSuggester(['gold', 'golf', 'google']);
      assert.deepEqual(["google"], await suggester.suggestInternal('goo'));
    });
  });
});
