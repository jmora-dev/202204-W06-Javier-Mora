import { Game } from './gameOfLife/classes/Game.js';

const game = new Game(15, 20, 'app', 'onClickCell');

// eslint-disable-next-line no-unused-vars
window.onClickCell = (x, y) => {
  game.onClickCell(+x, +y);
};
