import { Cell } from './Cell.js';

export class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.cells = this.createBoardCells(height, width);
  }

  createBoardCells(height, width) {
    const cells = [];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        cells.push(new Cell(x, y, null));
      }
    }
    return cells;
  }
}
