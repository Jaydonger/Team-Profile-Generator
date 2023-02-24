const Engineer = require('../lib/engineer');

describe('engineer.js', () => {
    test("getRole() should return \"Engineer\"", () => {
        const testValue = 'Engineer';
        const e = new Engineer("Eddy", 1, "asdf@asdf");
        expect(e.getRole()).toBe(testValue);
    })
})