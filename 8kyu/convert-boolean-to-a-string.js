/*Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given. */

function booleanToString1(b) {
    return `${b}`
}

console.log(booleanToString1(true))

console.log(typeof (booleanToString1(true)))


function booleanToString2(b) {
    if (b === true) {
        return "true"
    } else {
        return "false"
    }
}

console.log(booleanToString2(false))
console.log(typeof (booleanToString2(false)))


function booleanToString3(b) {
    return b === true ? 'true' : 'false'
}

console.log(booleanToString3(false))
console.log(typeof (booleanToString3(false)))


//Sample tests 

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
});
