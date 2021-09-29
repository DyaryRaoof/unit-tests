const { stringLength } = require('./task1.js');

test('string count should be 10', () => {
  expect(stringLength('dyary')).toBe(5);
});

test('should throw error', () => {
  expect(() => stringLength('dyaryraoofs')).toThrow();
});
