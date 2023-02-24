const Manager = require('../lib/manager');

test("getRole() should return \"Manager\"", () => {
    const testValue = 'Manager';
    const e = new Manager("Eddy", 1, "asdf@asdf.com");
    expect(e.getRole()).toBe(testValue);
})

test("getOffice() should return \"asdf@asdf.com\"", () => {
    const testValue = 2;
    const e = new Manager("Eddy", 1, testValue);
    expect(e.getOffice()).toBe(testValue);
})