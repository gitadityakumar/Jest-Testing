const sum = require('./sum'); // Import the module you want to test

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // Assertion to check the result of your function
});
