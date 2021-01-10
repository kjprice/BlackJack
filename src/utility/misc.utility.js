export const numToDecimalPlace = (number, decimalPoint) => {
  return parseFloat(number.toFixed(decimalPoint));
};

export default numToDecimalPlace;
