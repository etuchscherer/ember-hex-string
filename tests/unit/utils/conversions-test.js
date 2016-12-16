import { module, test } from 'qunit';
import { stringToHex, stringToHexColor } from 'ember-hex-string/utils/conversions';

module('Unit | Utility | conversions');

test('stringToHex can a string to a hex value', function(assert) {
  let result = stringToHex('ET');
  let expected = '8af';
  assert.strictEqual(result, expected);
});

test('stringToHex can return a lengthy hex value', function(assert) {
  let result = stringToHex('foosangbro-chimichanga-hot.potatoes,with extra sauce');
  assert.ok(result.length > 6);
});

test('stringToHexColor will truncate length of 2 properly', function(assert) {
  let result = stringToHexColor('ET');
  let expected = '8af';
  assert.strictEqual(result, expected);
});

test('stringToHexColor can truncate a lengthy hex value', function(assert) {
  let result = stringToHexColor('foosangbro-chimichanga-hot.potatoes,with extra sauce');
  assert.ok(result.length === 6);
});

test('stringToHexColor returns result where first char === #', function(assert) {
  let result = stringToHexColor('foosangbro-chimichanga-hot.potatoes,with extra sauce');
  assert.ok(result.charAt(0) === '#');
});
