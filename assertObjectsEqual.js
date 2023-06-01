const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (object1[key] === object2[key]) {
      return true;
    } else {
      return false;
    }
  }
};

const assertObjectEqual = function (actual, expected) {
  // to import the library so that the  function can use it
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


//test
const example = {
  a: '1', b: 2
};
const anotherexample = {
  b: 2, a: '1'
};
console.log(assertObjectEqual(example, anotherexample));
