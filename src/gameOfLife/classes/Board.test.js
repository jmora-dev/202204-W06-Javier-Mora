import { Board } from './Board.js';

describe('Given class Board', () => {
  describe('When receive 2,1 as constructor parameters', () => {
    test('Then should be {height: 2, width:1, cells:[[null], [null]]', () => {
      const values = [2, 1];
      const expectedResult = { height: 2, width: 1, cells: [[null], [null]] };
      const result = new Board(...values);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive 1,2 as constructor parameters', () => {
    test('Then should be {height: 1, width:2, cells:[[null, null]]}', () => {
      const values = [1, 2];
      const expectedResult = { height: 1, width: 2, cells: [[null, null]] };
      const result = new Board(...values);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive 5,6 as constructor parameters', () => {
    describe('Use function getAdjacentPositions with 1,1 as parameters', () => {
      test('Then should be [[0, 0],[0, 1],[0, 2],[1, 0],[1, 2],[2, 0],[2, 1],[2, 2]]', () => {
        const instance = new Board(5, 6);
        const values = [1, 1];
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
        const result = instance.getAdjacentPositions(...values);
        expect(result).toEqual(expectedResult);
      });
    });
    describe('Use function getAdjacentPositions with 0,0 as parameters', () => {
      test('Then should be [[5, 4],[5, 0],[5, 1],[0, 4],[0, 1],[1, 4],[1, 0],[1, 1]]', () => {
        const instance = new Board(5, 6);
        const values = [0, 0];
        const expectedResult = [
          [5, 4],
          [5, 0],
          [5, 1],
          [0, 4],
          [0, 1],
          [1, 4],
          [1, 0],
          [1, 1],
        ];
        const result = instance.getAdjacentPositions(...values);
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
