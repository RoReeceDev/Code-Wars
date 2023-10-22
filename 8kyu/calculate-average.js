/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
    let total = 0
    let count = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
        count++

    }
    if (array.length === 0) {
        return 0
    } else {
        return total / count;
    }
}

//Sample Tests 

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findAverage([1, 1, 1]), 1);
        assert.strictEqual(findAverage([1, 2, 3]), 2);
        assert.strictEqual(findAverage([1, 2, 3, 4]), 2.5);
    });
});  
