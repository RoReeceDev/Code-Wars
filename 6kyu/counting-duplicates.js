/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

 */


//PREP

//P: Take in a str that will have numbers and letters (uppercase or lowercase)
//R: the count of what elements repeat

//E:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//P: 




//create a function 
//make all lowercase
//create an arr to hold the duplicates
//create an arr to hold the elemnents we've seen already
//a loop to check and see if index is an letter or a number?
//if letter/number is in the seen arr, and the letter is not already in the duplicates array then push the letter/number to duplicates arr
//if letter/number isnt in the seen arr then push to the seen arr
//return the length of the duplicates array

function duplicateCount(text) {
    text = text.toLowerCase()
    let seen = []
    let duplicates = []

    for (let character of text) {
        if ((character >= 'a' && character <= 'z') || (character >= '0' && character <= '9')) {
            if (seen.includes(character)) {
                if (!duplicates.includes(character)) {
                    duplicates.push(character)
                }
            } else {
                seen.push(character)
            }
        }
    }

    return duplicates.length
}


//Sample Tests 

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(duplicateCount(""), 0);
        assert.strictEqual(duplicateCount("abcde"), 0);
        assert.strictEqual(duplicateCount("aabbcde"), 2);
        assert.strictEqual(duplicateCount("aabBcde"), 2, "should ignore case");
        assert.strictEqual(duplicateCount("Indivisibility"), 1)
        assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
    });
});
