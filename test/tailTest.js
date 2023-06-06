const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it('return 2 for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
  });
  it('return "Lighthouse" for ["Hello", "Lighthouse", "Labs"] to ensure first element is "Lighthouse', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[0], "Lighthouse");
  });
  it('return "Labs" for ["Hello", "Lighthouse", "Labs"] to ensure second element is "Labs"', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[1], "Labs");
  });
});


// const assertEqual = require('../assertArraysEqual');


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!