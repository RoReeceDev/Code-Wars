/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/

//Did it two ways

function digitize(n) {
    let reverse = []
    let dividen = n
    if (dividen === 0) {
        return [0]
    }
    while (dividen > 0) {

        let remainder = dividen % 10
        dividen = Math.floor(dividen / 10)
        reverse.push(remainder)

    }
    /*let digits = `${n}`
    let reverse = []
    for(let i = digits.length - 1; i >= 0; i--){
      let make = digits[i]
      reverse.push(Number(make))
    }*/

    return reverse
}


//Sample Test 

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
        assert.deepEqual(digitize(0), [0]);
    });
});
