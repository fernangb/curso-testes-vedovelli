import { sum } from './calculator';

it('should sum 2 and 2 and return must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even if one of then is a string and return must be 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if one of then is not a number', () => {
  expect(() => {
    sum('two', 'two');
  }).toThrowError();
});
