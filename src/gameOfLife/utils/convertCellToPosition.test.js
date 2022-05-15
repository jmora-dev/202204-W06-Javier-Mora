import { convertCellToPosition } from './convertCellToPosition.js';

describe('Given function getArrayPosition', () => {
  describe('When receive "text"', () => {
    test('Then should throw a TypeError', () => {
      const values = ['text'];
      expect(() => convertCellToPosition(...values)).toThrow(TypeError);
    });
  });
  describe('When receive {x:1,y:2}', () => {
    test('Then should be [1,2]', () => {
      const values = [{ x: 1, y: 2 }];
      const expectedResult = [1, 2];
      const result = convertCellToPosition(...values);
      expect(result).toEqual(expectedResult);
    });
  });
});
