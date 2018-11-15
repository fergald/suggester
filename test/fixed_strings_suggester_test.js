import {FixedStringsSuggester} from '../fixed_strings_suggester.js';

var assert = require('assert');
describe('FixedStringsSuggester', function() {
  describe('#suggestInternal', function() {
    it('should TODO', function(){
      var suggester = new FixedStringsSuggester(['gold', 'golf', 'google']);
      assert.deepEqual(["google"], suggester.suggestInternal('goo'));
    });
  });
});
