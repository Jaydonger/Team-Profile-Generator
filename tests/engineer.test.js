const Engineer = require('../lib/engineer');


test("getRole() should return \"Engineer\"", () => {
    const testValue = 'Engineer';
    const e = new Engineer("Eddy", 1, "asdf@asdf.com");
    expect(e.getRole()).toBe(testValue);
})

test("getGithub() should return \"asdf@asdf.com\"", () => {
    const testValue = 'asdf@asdf.com';
    const e = new Engineer("Eddy", 1, testValue);
    expect(e.getGithub()).toBe(testValue);
})
