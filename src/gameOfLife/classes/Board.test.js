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
          new Cell(1, 0, false),
          new Cell(0, 1, false),
          new Cell(1, 1, false),
        ];
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Use function setCellAlive with 0,0,true as parameters', () => {
      test('Then should change this cell to isAlive true', () => {
        const board = new Board(2, 2);
        const values = [0, 0, true];
        board.setCellAlive(...values);
        const expectedResult = true;
        expect(board.getCellByPosition(0, 0).isAlive).toBe(expectedResult);
      });
    });

    describe('Use function setCellAlive with 0,0,false as parameters', () => {
      test('Then should change this cell to isAlive false', () => {
        const board = new Board(2, 2);
        board.cells[0].isAlive = true;
        const values = [0, 0, false];
        board.setCellAlive(...values);
        const expectedResult = false;
        expect(board.getCellByPosition(0, 0).isAlive).toBe(expectedResult);
      });
    });

    describe('Use function toggleCellAlive with 0,0 as parameters', () => {
      test('Then should change this cell to isAlive true', () => {
        const board = new Board(2, 2);
        const values = [0, 0];
        board.toggleCellAlive(...values);
        const expectedResult = true;
        expect(board.getCellByPosition(0, 0).isAlive).toBe(expectedResult);
      });
    });

    describe('Use function toggleCellAlive with 0,0 as parameters', () => {
      test('Then should change this cell to isAlive false', () => {
        const board = new Board(2, 2);
        board.cells[0].isAlive = true;
        const values = [0, 0];
        board.toggleCellAlive(...values);
        const expectedResult = false;
        expect(board.getCellByPosition(0, 0).isAlive).toBe(expectedResult);
      });
    });

    describe('Use function getCellsAlive with board.cells as parameters', () => {
      test('Then should change this cell to isAlive false', () => {
        const board = new Board(2, 2);
        board.cells[0].isAlive = true;
        board.cells[1].isAlive = true;
        const values = board.cells;
        const result = board.getCellsAlive(values);
        const expectedResult = [new Cell(0, 0, true), new Cell(1, 0, true)];
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Use function getCellsAlive with board.cells as parameters', () => {
      test('Then should change this cell to isAlive false', () => {
        const board = new Board(2, 2);
        const values = board.cells;
        const result = board.getCellsAlive(values);
        const expectedResult = [];
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Use function getCellByPosition with 0,0 as parameters', () => {
      test('Then should be new Cell(0, 0, false)', () => {
        const board = new Board(2, 2);
        const values = [0, 0];
        const result = board.getCellByPosition(...values);
        const expectedResult = new Cell(0, 0, false);
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Use function getCellByPosition with -1,-1 as parameters', () => {
      test('Then should be undefined', () => {
        const board = new Board(2, 2);
        const values = [-1, -1];
        const result = board.getCellByPosition(...values);
        const expectedResult = undefined;
        expect(result).toBe(expectedResult);
      });
    });

    describe('Use function calculateCellsAdjacentValue with -1,-1 as parameters', () => {
      test('Then should be undefined', () => {
        const board = new Board(2, 2);
        const values = [-1, -1];
        const result = board.getCellByPosition(...values);
        const expectedResult = undefined;
        expect(result).toBe(expectedResult);
      });
    });
  });

  describe('When receive 3,3 as constructor parameters', () => {
    describe('Use function getAdjacentPositionsToCell with new Cell(1,1,false) as parameters', () => {
      test('Then should be [[ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ]]', () => {
        const board = new Board(3, 3);
        const values = new Cell(1, 1, false);
        const result = board.getAdjacentPositionsToCell(values);
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
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Use function calculateCellsAdjacentValue with board.cells as parameters', () => {
      test('Then should be all board cells with adjacent 0 ', () => {
        const board = new Board(3, 3);
        const expectedResult = [...board.cells];
        const result = board.calculateCellsAdjacentValue(board.cells);
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Use function calculateCellsAdjacentValue with board.cells with Cell(1,1).isAlive true as parameters', () => {
      test('Then should be all board cells with adjacent 1 less position 1,1 ', () => {
        const board = new Board(3, 3);
        board.getCellByPosition(1, 1).isAlive = true;
        const expectedResult = board.cells.map((cell) => {
          const valueAdjacent = cell.isAlive ? 0 : 1;
          return { ...cell, adjacent: valueAdjacent };
        });
        const result = board.calculateCellsAdjacentValue(board.cells);
        expect(result).toEqual(expectedResult);
      });
    });

    describe('Use function resetAdjacentCellsValue with board.cells with Cell(1,1).isAlive true as parameters', () => {
      test('Then should be true', () => {
        const board = new Board(3, 3);
        board.getCellByPosition(1, 1).isAlive = true;
        const cells = board.calculateCellsAdjacentValue(board.cells);
        const result = board.resetAdjacentCellsValue(cells);
        const expectedResult = true;
        expect(result.every((cell) => cell.adjacent === 0)).toBe(
          expectedResult
        );
      });
    });

    describe('Use function updateCellStatusByAdjacentValue with board.cells with Cell(1,1).isAlive true as parameters', () => {
      test('Then should be false ', () => {
        const board = new Board(3, 3);
        board.getCellByPosition(1, 1).isAlive = true;
        board.cells = board.calculateCellsAdjacentValue(board.cells);
        board.cells = board.updateCellStatusByAdjacentValue(board.cells);
        const result = board.getCellByPosition(1, 1).isAlive;
        const expectedResult = false;
        expect(result).toBe(expectedResult);
      });
    });

    describe('Use function nextLoop with board.cells with Cell(1,1).isAlive true as parameters', () => {
      test('Then should be true', () => {
        const board = new Board(3, 3);
        board.getCellByPosition(1, 1).isAlive = true;
        board.nextLoop();
        const result = board.cells.every((cell) => !cell.isAlive);
        const expectedResult = true;
        expect(result).toBe(expectedResult);
      });
    });
  });
});
