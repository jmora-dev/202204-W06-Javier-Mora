export class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.cells = this.createBoardCells(height, width);
  }

  createBoardCells(height, width) {
    return new Array(height).fill(new Array(width).fill(null));
  }

  getAdjacentPositions(x, y) {
    const adjacentPositions = [];
    [-1, 0, 1].forEach((xOffset) => {
      [-1, 0, 1].forEach((yOffset) => {
        if (xOffset !== 0 || yOffset !== 0) {
          const xPos = this.normalizeIndex(x + xOffset, 0, this.width - 1);
          const yPos = this.normalizeIndex(y + yOffset, 0, this.height - 1);
          adjacentPositions.push([xPos, yPos]);
        }
      });
    });
    return adjacentPositions;
  }

  setLivePosition(x, y, value) {
    this.cells[x][y] = value;
  }

  isLivePosition(x, y) {
    return this.cells[x][y] !== null;
  }

  getAllLivePositions() {
    const livePositions = [];
    this.cells.forEach((row, y) => {
      row.forEach((value, x) => {
        if (this.isLivePosition(x, y)) {
          livePositions.push([x, y, value]);
        }
      });
    });
    return livePositions;
  }

  getAffectedPositions() {
    const affectedPositions = [];
    const livePositions = this.getAllLivePositions();
    livePositions.forEach((position) => {
      const adjacentPositions = this.getAdjacentPositions(...position);
      if (
        adjacentPositions.filter((i) => this.isLivePosition(i[0], i[1]))
          .length === 0
      ) {
        affectedPositions.push([position[0], position[1], 0]);
      }
      adjacentPositions.forEach((adjacent) => {
        const search = affectedPositions.find(
          (i) => i[0] === adjacent[0] && i[1] === adjacent[1]
        );
        if (search) {
          search[2]++;
        } else {
          affectedPositions.push([adjacent[0], adjacent[1], 1]);
        }
      });
    });
    return affectedPositions;
  }

  changeAffectedPositions() {
    const cellsCopy = [...this.cells];
    const affectedPositions = this.getAffectedPositions();
    affectedPositions.forEach((position) => {
      cellsCopy[position[0]][position[1]] = this.evaluateAffectedPosition(
        ...position
      );
    });
    return cellsCopy;
  }

  evaluateAffectedPosition(x, y, liveAdjacent) {
    if (this.isLivePosition(x, y)) {
      return liveAdjacent >= 2 && liveAdjacent <= 3 ? 1 : null;
    } else {
      return liveAdjacent >= 3 ? 1 : null;
    }
  }

  normalizeIndex(value, minValue, maxValue) {
    if (value < minValue) return maxValue;
    if (value > maxValue) return minValue;
    return value;
  }
}
