// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

//PREP 

//P: params will be strs 
//R: using template string, return a sentence with "and" between the params
//E: templateStrings(apples, cool) returns "apples are cool"
//P

var templateStrings = function (noun, adjective) {
    //use template literals to return a str sentence with 'and' between params 
    return `${noun} are ${adjective}`
}

//Sample Test

describe('Testing templateStrings', () => {
    const { assert } = require('chai')

    const doTest = (noun, adjective, expected, clue) => {
        const actual = templateStrings(noun, adjective)
        assert.strictEqual(actual, expected, clue)
    }

    it('Basic tests', () => {
        doTest('Animals', 'Good', 'Animals are Good', 'templateStrings(\'Animals\', \'Good\')')
        doTest('You', 'special', 'You are special', 'templateStrings(\'You\', \'special\')')
        doTest('lives', 'frozen', 'lives are frozen', 'templateStrings(\'lives\', \'frozen\')')
    })
})