/* The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting*/


//Prep

//P: three paramaters: cap, on and wait, all numbers. 
//cap is # of people the bus can hold, on is the # of people on the bus, wait is the # of people waiting to get on the bus
//R: return 0 of there is enough room, return the number of people you can't get on the bus if there isnt 
//E: cap = 15, on = 8, wait = 2 return 0 becuase there is space
//E: cap = 20, on = 15, wait = 7, return 2 the number of people who cant get on


function enough(cap, on, wait) {
    //add the on and wait together 
    const total = on + wait

    //conditional 
    //if limit is than the cap return remaining
    if (total > cap) {
        //subtract from the cap to get remaining spaces
        return total - cap
    } else {
        //if limit is less than cap return 0
        return 0
    }
}

//Sample Tests 

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
