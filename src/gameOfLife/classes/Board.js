import { calculateAdjacentPositionsSpherical } from '../utils/calculateAdjacentPositionsSpherical.js';
import { cellSamePositionAsCords } from '../utils/cellSamePositionAsCords.js';
import { evaluateCellStatus } from '../utils/evaluateCellStatus.js';
import { Cell } from './Cell.js';

export class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.cells = this.createBoardCells(height, width);
    this.lastCells = null;
  }

  createBoardCells(height, width) {
    const cells = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        cells.push(new Cell(x, y, false));
      }
    }
    return cells;
  }

  setCellAlive(x, y, isAlive) {
    const cell = this.cells.find((cell) => cellSamePositionAsCords(cell, x, y));
    if (cell) {
      cell.isAlive = isAlive;
    }
  }

  toggleCellAlive(x, y) {
    const cell = this.cells.find((cell) => cellSamePositionAsCords(cell, x, y));
    if (cell) {
      cell.isAlive = !cell.isAlive;
    }
  }

  getCellsAlive(cells) {
    return cells.filter((cell) => cell.isAlive);
  }

  getCellByPosition(x, y) {
    return this.cells.find((cell) => cellSamePositionAsCords(cell, x, y));
  }

  getAdjacentPositionsToCell(cell) {
    return calculateAdjacentPositionsSpherical(
      cell.x,
      cell.y,
      this.width - 1,
      this.height - 1
    );
  }

  calculateCellsAdjacentValue(cells) {
    const cellsCopy = [...cells];
    const cellsAlive = this.getCellsAlive(cellsCopy);
    cellsAlive.forEach((cell) => {
      const adjacentPositions = this.getAdjacentPositionsToCell(cell);
      console.log(cell, adjacentPositions);
      adjacentPositions.forEach((position) => {
        this.getCellByPosition(...position).adjacent++;
      });
    });
    return cellsCopy;
  }

  resetAdjacentCellsValue(cells) {
    return cells.map((cell) => ({ ...cell, adjacent: 0 }));
  }

  updateCellStatusByAdjacentValue(cells) {
    return cells.map((cell) => {
      if (cell.adjacent > 0 || (cell.isAlive && cell.adjacent === 0)) {
        cell.isAlive = evaluateCellStatus(cell.isAlive, cell.adjacent);
      }
      return cell;
    });
  }

  nextLoop() {
    this.lastCells = [...this.cells];
    this.cells = this.calculateCellsAdjacentValue(this.cells);
    this.cells = this.updateCellStatusByAdjacentValue(this.cells);
    this.cells = this.resetAdjacentCellsValue(this.cells);
  }
}
