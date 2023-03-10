// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

//P: params will be a int and a str. the int will be the price of the meal, the str will be the service rating 
//R: return how much to leave in tip as an int, rounded up 
//E: calculateTip(20, "Excellent"), 4 dollar tip
//P
function calculateTip(amount, rating) {
    //need a conditional 
    //if rating -> good --> calculate tip for 10% 
    //etc

    if (rating.toLowerCase() === 'terrible') {
        //Use Math.ceil to round up to the nearest int
        //multiple amt by tip % for tip 
        return Math.ceil(amount * 0.00)
    } else if (rating.toLowerCase() === 'poor') {
        return Math.ceil(amount * 0.05)
    } else if (rating.toLowerCase() === 'good') {
        return Math.ceil(amount * 0.10)
    } else if (rating.toLowerCase() === 'great') {
        return Math.ceil(amount * 0.15)
    } else if (rating.toLowerCase() === 'excellent') {
        return Math.ceil(amount * 0.20)
        // else if not valid return 'Rating no recognised'
    } else {
        return 'Rating not recognised'
    }

}

//Sample Tests 

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(calculateTip(20, "Excellent"), 4);
        Test.assertEquals(calculateTip(26.95, "good"), 3);

    });
});
