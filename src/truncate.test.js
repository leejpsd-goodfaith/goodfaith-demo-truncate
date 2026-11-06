import assert from 'node:assert/strict';
import { test } from 'node:test';
import { truncate } from './truncate.js';

test('keeps short text', () => {
  assert.equal(truncate('hi', 5), 'hi');
});
