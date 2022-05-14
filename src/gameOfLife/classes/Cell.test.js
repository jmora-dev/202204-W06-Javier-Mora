import { Cell } from './Cell.js';

describe('Given class Cell', () => {
  describe('When receive 1,2,3 as constructor parameters', () => {
    test('Then should be {x: 1, y:2, team:3}', () => {
      const values = [1, 2, 3];
      const expectedResult = { x: 1, y: 2, team: 3 };
      const result = new Cell(...values);
      expect(result).toEqual(expectedResult);
    });
  });
});
