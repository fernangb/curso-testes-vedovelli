export function sum(number1, number2) {
  if (Number.isNaN(parseInt(number1)) || Number.isNaN(parseInt(number2)))
    throw new Error('Please check your input');

  return +number1 + +number2;
}
