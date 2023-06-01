const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// function that count what i want to count
const countOnly = function (allItems, itemsToCount) {
  if (allItems === null || allItems === 0 || allItems === undefined) {
    return "There is no item";
  } else if (itemsToCount === null || itemsToCount === 0 || itemsToCount === undefined) {
    return "There is no item need to count";
  }
  const result = {};
  for (let name of allItems) {
    if (itemsToCount[name] === true) {
      if (!result[name]) {
        result[name] = 1;
      } else {
        result[name] += 1;
      }
    }
  }
  return (result);
};

//test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
