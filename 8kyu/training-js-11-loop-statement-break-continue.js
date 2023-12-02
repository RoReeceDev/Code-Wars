// We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

// function findFirstOddNumber(arr){
//   var result;
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]%2==1){
//       result=arr[i];
//       break;
//     }
//   }
//   return result;
// }
// In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

// In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

// function dontDisplayNegative(arr){
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]<0) continue;   
//     console.log(arr[i])
//   }
// }
// In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

// Through the use of break and continue, you can make the loop statement more flexible and convenient.

// Ok, lesson is over. let's us do some task with break and continue.

// Task
// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

//P-takes in string arr
//R- return new arr based off conditions 


function grabDoll(dolls) {
    var bag = [];
    for (let i = 0; i < dolls.length; i++) {

        //create check variable for if bag is full

        let isFull = bag.length === 3 ? true : false;

        //if element is hello kitty or barbie doll push to bag arr
        if (
            dolls[i].toLowerCase() === "hello kitty" ||
            dolls[i].toLowerCase() === "barbie doll"
        ) {

            //if bag not full then push else break or continue through 
            if (!isFull) {
                bag.push(dolls[i]);
            } else {
                break;
            }
        } else {
            continue;
        }
    }

    return bag;
}

//Sample Tests

describe("Tests", () => {
    it("test", () => {
        Test.assertSimilar(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"]);
        Test.assertSimilar(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"]);
        Test.assertSimilar(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), ["Hello Kitty", "Hello Kitty", "Barbie doll"]);
        Test.assertSimilar(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Barbie doll", "Hello Kitty", "Hello Kitty"]);

    });
});
