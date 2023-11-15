// While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

// So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

// If string contains 4 numbers but not consecutive it returns "not consecutive".

//EXAMPLES

// assert.strictEqual(checkRoot('4,5,6,7'), '841, 29')
// assert.strictEqual(checkRoot('3,s,5,6'), 'incorrect input')
// assert.strictEqual(checkRoot('11,13,14,15'), 'not consecutive')



//parameters one strings of 4 numbers
//edge cases 
//what if there are more than 4 number
//what happens if there are less than 4 numbers
//what if thewy are not consectuive
//what happen if one of list is not a number 

//return the product of the 4 numbers plus 1 (perfect square)
//return also the square root of the perfect square

function checkRoot(str) {
    //change the str to an array 
    const arr = str.split(",").map(el => parseInt(el))

    //change into an array of numbers

    console.log(arr)


    //check to see  if they are all numbers
    //check to see if the length is only 4 no more no less
    if ((arr.length != 4) || (arr.some(el => isNaN(el))) || (arr.some(el => el == 0))) {
        console.log(arr)
        return 'incorrect input'
    }

    let product = 1
    let sqrt

    console.log(arr)

    //loop through each element of the array
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i])
        //check to see if there consecutive 
        if (i < arr.length - 1 && arr[i + 1] !== arr[i] + 1) {
            return "not consecutive"
        }

        product *= arr[i]

        sqrt = Math.sqrt(product + 1)
    }


    return `${product + 1}, ${sqrt}`
    //find the produt of the four number and adding 1 to get the perfect square
    //another variable of the square root
    //return either a str of two numbers, or incorrect input, or not consecutive depenmding on conditional 
}

//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
    it("Tests", () => {
        assert.strictEqual(checkRoot('4,5,6,7'), '841, 29')
        assert.strictEqual(checkRoot('3,s,5,6'), 'incorrect input')
        assert.strictEqual(checkRoot('11,13,14,15'), 'not consecutive')
    });
});