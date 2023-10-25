/*Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"*/

class Ghost {
    constructor() {
        this.colors = ["white", "yellow", "purple", "red"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
}

//Sample Tests

describe("Ghost", () => {
    it("should be one of the specified colors", () => {
        let colors = ['white', 'yellow', 'purple', 'red'];
        Test.expect(colors.includes(new Ghost().color));
    });
});