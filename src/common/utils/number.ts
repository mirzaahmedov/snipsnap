const roundNumberToDecimalPlaces = (number: number, decimalPlaces: number) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
};

export { roundNumberToDecimalPlaces };
