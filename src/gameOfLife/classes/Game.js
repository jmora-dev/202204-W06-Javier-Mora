import { renderBoard } from '../render/renderBoard.js';
import { Board } from './Board.js';

export class Game {
  constructor(height, width, intervalTime, idHtmlElement, onClickFunctionName) {
    this.idHtmlElement = idHtmlElement;
    this.board = new Board(height, width);
    this.intervalTime = intervalTime;
    this.onClickFunctionName = onClickFunctionName;
    this.interval = null;
    this.render();
  }

  render() {
    const htmlElement = document.querySelector(`#${this.idHtmlElement}`);
    htmlElement.innerHTML = renderBoard(this.board, this.onClickFunctionName);
  }

  onClickCell(x, y) {
    if (!Number.isInteger(+x) && !Number.isInteger(+y)) {
      throw new TypeError('Parameters must be integer');
    }
    this.board.toggleCellAlive(+x, +y);
    this.render();
  }

  start() {
    if (this.interval) {
      this.stop();
    }
    this.interval = setInterval(() => {
      this.board.nextLoop();
      this.render();
    }, this.intervalTime);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
