import { sanitizeCord } from './sanitizeCord.js';

export const calculateAdjacentPositionsSpherical = (x, y, maxX, maxY) => {
  if (
    !Number.isInteger(x) ||
    !Number.isInteger(y) ||
    !Number.isInteger(maxX) ||
    !Number.isInteger(maxY)
  ) {
    throw new TypeError('Parameters must be integer');
  }
  const possibilities = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  return possibilities.map((offset) => {
    return [
      sanitizeCord(x + offset[0], maxX),
      sanitizeCord(y + offset[1], maxY),
    ];
  });
};
