// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


//PREP
//P: params are going to be the ints that represent the widht, height and depth
//R: return an array of the area and volume box
//E: see sample tests 
//P: 
function getSize(width, height, depth) {

    //create empty arr 

    const arr = []

    //How to get surface area: 2lw + 2lh + 2wh

    const sArea = ((2 * depth * width) + (2 * depth * height) + (2 * width * height))
    console.log(sArea)

    arr.push(sArea)

    //How to get volume l * w * h

    const volume = (depth * width * height)
    console.log(volume)

    //push to arr 

    arr.push(volume)

    //return arr 

    return arr
}

//Sample Tests 


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(getSize(4, 2, 6), [88, 48]);   
    assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
    assert.deepEqual(getSize(4, 2, 6)[0], 88);
    assert.deepEqual(getSize(4, 2, 6)[1], 48);
  })
});