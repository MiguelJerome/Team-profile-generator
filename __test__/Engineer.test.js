

const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
  const engineer = new Engineer('Miguel',3,'2001326@collegelacite.com', 'MiguelJerome');

  expect(engineer.name).toBe('Miguel');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email ).toBe('2001326@collegelacite.com');
  expect(engineer.github ).toBe('MiguelJerome');
});