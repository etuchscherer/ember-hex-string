import { module, test } from 'qunit';
import { stringToHex } from 'ember-hex-string/utils/conversions';

module('Unit | Utility | conversions');

test('can a string to a hex value', function(assert) {
  let result = stringToHex('ET');
  let expected = '61';
  assert.strictEqual(result, expected);
});
