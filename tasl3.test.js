const { Calculator } = require('./task3.js');

describe('add', () => {
  test('should equal to 3', () => expect(Calculator.add(1, 2)).toBe(3));
  test('should equal to 100', () => expect(Calculator.add(100, 0)).toBe(100));
  test('should equal to 104', () => expect(Calculator.add(100, 4)).toBe(104));
});

describe('subtract', () => {
  test('should equal to 1', () => expect(Calculator.subtract(2, 1)).toBe(1));
  test('should equal to 3', () => expect(Calculator.subtract(100, 0)).toBe(100));
  test('should equal to 3', () => expect(Calculator.subtract(100, 104)).toBe(-4));
});

describe('divide', () => {
  test('should equal to 0.5', () => expect(Calculator.divide(1, 2)).toBe(0.5));
  test('should throw -100', () => expect(Calculator.divide(100, -1)).toBe(-100));
  test('should equal 20', () => expect(Calculator.divide(100, 5)).toBe(20));
});

describe('multiply', () => {
  test('should equal to -2', () => expect(Calculator.multiply(-1, 2)).toBe(-2));
  test('should equal to 0', () => expect(Calculator.multiply(100, 0)).toBe(0));
  test('should equal to 400', () => expect(Calculator.multiply(100, 4)).toBe(400));
});
