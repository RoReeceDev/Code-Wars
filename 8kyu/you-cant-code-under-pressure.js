//Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}

//Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(doubleInteger(2), 4);
  });
});