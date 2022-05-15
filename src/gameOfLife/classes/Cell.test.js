import { Cell } from './Cell.js';

describe('Given class Cell', () => {
  describe('When receive 2,1 as constructor parameters', () => {
    test('Then should be {x:2, y:1, isAlive:true, adjacent:0}', () => {
      const values = [2, 1, true];
      const result = new Cell(...values);
      const expectedResult = { x: 2, y: 1, isAlive: true, adjacent: 0 };
      expect(result).toEqual(expectedResult);
    });
  });
});
