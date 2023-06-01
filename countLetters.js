const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters) {
  const storage = {};
  for (let w of letters) {
    if (w === ' ') {
      continue;
    }
    if (!storage[w]) {
      storage[w] = 1;
    } else {
      storage[w] += 1;
    }
  }
  console.log(storage);
};

//test
console.log(countLetters("lighthouse in the house"));