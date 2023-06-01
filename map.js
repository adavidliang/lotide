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
//test function
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results);
  return results; // empty for now :)
};

const results1 = map(words, word => word[0]);
console.log(results1);

//test code
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['g', 'm', 't', 'c', 't']);
assertArraysEqual(results1, [1, 2, 3, 4, 5]);
assertArraysEqual(results1, ['hello d', 'hello c', 'heelot']);