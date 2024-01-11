// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//PREP

//P: params will be strs for city and state, for the name param it will be an array of params
//R: return a str sentence that combines the strs in the array and the city and state into one sentence
//E: sayHello(["john", "apple"], philadelphia, pennsylvania)
//returns 'Hello, John Smith! Welcome to Phoenix, Arizona!'
//P:

function sayHello(name, city, state) {
    //Name is already an array per the examples...

    //join items in array into one string
    let fullName = name.join(' ')

    // return the sentence with the new string
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

//Sample Tests 

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
    assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
    assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
  });
});