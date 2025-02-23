const assert = require('assert');
const { isEven } = require('./index');

describe('isEven', function() {
  it('should return true if the current day is even', function() {
    const originalDate = Date;
    global.Date = class extends Date {
      constructor() {
        super('2023-10-02T00:00:00Z'); // Чётный день
      }
    };
    assert.strictEqual(isEven(), true);
    global.Date = originalDate;
  });

  it('should return false if the current day is odd', function() {
    const originalDate = Date;
    global.Date = class extends Date {
      constructor() {
        super('2023-10-01T00:00:00Z'); // Нечётный день
      }
    };
    assert.strictEqual(isEven(), false);
    global.Date = originalDate;
  });
});
