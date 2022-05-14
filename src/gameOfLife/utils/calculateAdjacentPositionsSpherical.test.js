import { calculateAdjacentPositionsSpherical } from './calculateAdjacentPositionsSpherical.js';

describe('Given function calculateAdjacentPositionsSpherical', () => {
  describe('When receive "text"', () => {
    test('Then should throw a TypeError', () => {
      const values = ['text'];
      expect(() => calculateAdjacentPositionsSpherical(...values)).toThrow(
        TypeError
      );
    });
  });

  describe('When receive 1,"text"', () => {
    test('Then should throw a TypeError', () => {
      const values = [1, 'text'];
      expect(() => calculateAdjacentPositionsSpherical(...values)).toThrow(
        TypeError
      );
    });
  });

  describe('When receive 1, 1, "text"', () => {
    test('Then should throw a TypeError', () => {
      const values = [1, 1, 'text'];
      expect(() => calculateAdjacentPositionsSpherical(...values)).toThrow(
        TypeError
      );
    });
  });

  describe('When receive 1, 1, 1 "text"', () => {
    test('Then should throw a TypeError', () => {
      const values = [1, 1, 1, 'text'];
      expect(() => calculateAdjacentPositionsSpherical(...values)).toThrow(
        TypeError
      );
    });
  });

  describe('When receive 1,1,3,3', () => {
    test('Then should be [[ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ]]', () => {
      const values = [1, 1, 3, 3];
      const expectedResult = [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ];
      const result = calculateAdjacentPositionsSpherical(...values);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive 0,0,4,6', () => {
    test('Then should be [[ 4, 6 ], [ 4, 0 ], [ 4, 1 ], [ 0, 6 ], [ 0, 1 ], [ 1, 6 ], [ 1, 0 ], [ 1, 1 ]]', () => {
      const values = [0, 0, 4, 6];
      const expectedResult = [
        [4, 6],
        [4, 0],
        [4, 1],
        [0, 6],
        [0, 1],
        [1, 6],
        [1, 0],
        [1, 1],
      ];
      const result = calculateAdjacentPositionsSpherical(...values);
      expect(result).toEqual(expectedResult);
    });
  });
});
