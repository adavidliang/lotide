const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (word, withoutword) {
  const result = [];
  for (let i of word) {
    if (i !== withoutword[0]) {
      result.push(i);
    }
  }
  return (result);
};

//test case
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);