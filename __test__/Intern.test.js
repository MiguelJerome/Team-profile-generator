
const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
  const intern = new Intern('Miguel',3,'2001326@collegelacite.com', 5);

  expect(intern.name).toBe('Miguel');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email ).toBe('2001326@collegelacite.com');
  expect(intern.school).toEqual(expect.any(Number));
});