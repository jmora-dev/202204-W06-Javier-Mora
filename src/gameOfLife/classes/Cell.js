export class Cell {
  adjacent = 0;
  constructor(x, y, isAlive) {
    this.x = x;
    this.y = y;
    this.isAlive = isAlive;
  }
}
