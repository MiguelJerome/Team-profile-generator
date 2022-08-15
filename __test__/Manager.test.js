
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Miguel',3,'2001326@collegelacite.com', 5);

  expect(manager.name).toBe('Miguel');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email ).toBe('2001326@collegelacite.com');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});