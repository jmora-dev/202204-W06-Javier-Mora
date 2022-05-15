import { renderBoard } from '../render/renderBoard.js';
import { Board } from './Board.js';

export class Game {
  constructor(height, width, idHtmlElement, onClickFunctionName) {
    this.idHtmlElement = idHtmlElement;
    this.board = new Board(height, width);
    this.onClickFunctionName = onClickFunctionName;
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
}
