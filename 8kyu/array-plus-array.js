/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */


function arrayPlusArray(arr1, arr2) {
    //combine the arr so its all one arr
    const combined = arr1.concat(arr2)
    console.log(combined)

    //define sum 
    let sum = 0
    //then loop through them 
    combined.forEach((el) => sum += el)
    //add the value together into one value

    //return the sum
    return sum
}

//Sample Tests 

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
        assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
        assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
        assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
    })
})