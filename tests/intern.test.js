const Intern = require('../lib/intern');

test("getRole() should return \"Intern\"", () => {
    const testValue = 'Intern';
    const e = new Intern("Eddy", 1, "asdf@asdf.com");
    expect(e.getRole()).toBe(testValue);
})

test("getSchool() should return \"UCLA\"", () => {
    const testValue = 'UCLA';
    const e = new Intern("Eddy", 1, testValue);
    expect(e.getSchool()).toBe(testValue);
})