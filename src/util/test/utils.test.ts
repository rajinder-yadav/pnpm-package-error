'use strict';
import assert from 'assert';
import * as util from '../util';

describe('Sample tests', () => {
  it('hello', () => {
    assert.equal(util.hello(), 'Hello DM-Tools!');
  });

  it('goodbye', () => {
    assert.equal(util.goodbye(), 'See you later =)');
  });
});
