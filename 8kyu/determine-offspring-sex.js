/*The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";*/

// Parameters:** What are the parameters of the function?
//sperm = which will equal the chromosome present in the male's sperm
// Return:** What will the function return?
//should return whether the person is having a boy or girl based off the chromosome in the male sperm
// Examples**: Understanding the expected return
//XY would be a male because there is Y chromosome; whereas XX would be female because there are only X chromosomes
// Pseudocode: Steps to code 

function chromosomeCheck(sperm) {
    //check the contents of the sperm argument
    let checkSperm = sperm
    //determine if the sperm value has a Y
    if (checkSperm.includes('Y')) {
        return `Congratulations! You're going to have a son.`
    } else {
        return `Congratulations! You're going to have a daughter.`
    }
    //if sperm has Y chromosome, then child is male
    //if no Y chromsome present. child is female

}

function chromosomeCheck(sperm) {
    let baby = sperm === 'XY' ? `Congratulations! You're going to have a son.` : `Congratulations! You're going to have a daughter.`
    return baby
}

//Sample Tests 

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
        Test.assertEquals(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")
    });
});
