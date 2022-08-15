const Employee = require('../lib/Employee.js');


test('creates a employee object', () => {
  const employee = new Employee('Miguel',3,'2001326@collegelacite.com');

  expect(employee.name).toBe('Miguel');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('2001326@collegelacite.com');
});

