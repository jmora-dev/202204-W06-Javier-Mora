export const sanitizeCord = (value, maxValue) => {
  if (!Number.isInteger(value) || !Number.isInteger(maxValue)) {
    throw new TypeError('Parameters must be integer');
  }
  if (value < 0) return maxValue;
  if (value > maxValue) return 0;
  return value;
};
