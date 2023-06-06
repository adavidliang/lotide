const assert = require('chai').assert;
const middle = require('../middle');

describe('middletest', () => {
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });

  
});
//assert.deepEqual = assertArraysEqual
// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]