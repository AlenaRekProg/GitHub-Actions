const assert = require('chai').assert;
const { isEven } = require('./index.js');

describe('isEven', function() {
  it('should return true if the current day is even', function() {
    const date = new Date();
    const currentDay = date.getDate();
    const expected = currentDay % 2 === 0;
    assert.strictEqual(isEven(), expected);
  });
});
