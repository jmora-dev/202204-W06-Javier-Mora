import { Board } from './Board.js';
import { Cell } from './Cell.js';

describe('Given class Board', () => {
  describe('When receive 2,1 as constructor parameters', () => {
    test('Then should be {height: 2,width: 1,cells: result.createBoardCells(2, 1),lastCells: null}', () => {
      const values = [2, 1];
      const result = new Board(...values);
      const expectedResult = {
        height: 2,
        width: 1,
        cells: result.createBoardCells(2, 1),
        lastCells: null,
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive 2,2 as constructor parameters', () => {
    describe('Use function createBoardCells with 2,2 as parameters', () => {
      test('Then should be [new Cell(0, 0, false),new Cell(0, 1, false),new Cell(1, 0, false),new Cell(1, 1, false),]', () => {
        const board = new Board(2, 2);
        const values = [2, 2];
        const result = board.createBoardCells(...values);
        const expectedResult = [
          new Cell(0, 0, false),
          new Cell(0, 1, false),
          new Cell(1, 0, false),
          new Cell(1, 1, false),
        ];
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
