//test function
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};
//test function
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
//actural function
const middle = function (array) {

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[array.length / 2]];
  } else if (array.length % 2 === 1) {
    return [array[array.length - 1] / 2];
  }
};




