const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (key1, callback) {
  for (let key in key1) {
    if (callback(key1[key])) {
      return key;
    }
  }
};

const x = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

// => "noma"


//test code
assertEqual(findKey((x), x => x.stars === 2), "noma");