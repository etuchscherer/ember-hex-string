import { similarity } from 'ember-hex-string/utils/comparisons';
import { module, test } from 'qunit';

module('Unit | Utility | comparisons');

test('similarity returns 1 for exact matches', function(assert) {
  let score = similarity('a', 'a');
  assert.strictEqual(score, 1);
});

test('similarity returns 0 for impossible matches', function(assert) {
  let score = similarity('a', 'b');
  assert.strictEqual(score, 0);
});

test('is case insensitive', function(assert) {
  let score = similarity('ab', 'AB');
  assert.strictEqual(score, 1);
});

test('can calculate 50 percent when expected', function(assert) {
  let score = similarity('ab', 'ac');
  assert.strictEqual(score, 0.5);
});

test('can calculate 75 percent when expected', function(assert) {
  let score = similarity('abcd', 'abc');
  assert.strictEqual(score, 0.75);
});
