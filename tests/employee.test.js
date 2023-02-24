const Employee = require('../lib/employee');

test("can return new employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("can set name via constructor argument", () => {
    const name = "Eddy";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("can set id via constructor argument", () => {
    const testValue = 4;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
})

test("can set email via constructor argument", () => {
    const testValue = 'asdf@asdf.com';
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
})

test("can get name via getName()", () => {
    const testValue = 'Eddy';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
})

test("can get id via getId()", () => {
    const testValue = 4;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
})

test("can get email via getEmail", () => {
    const testValue = 'asdf@asdf.com';
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
})

test("getRole() should return \"Employee\"", () => {
    const testValue = 'Employee';
    const e = new Employee("Eddy", 1, "asdf@asdf");
    expect(e.getRole()).toBe(testValue);
})