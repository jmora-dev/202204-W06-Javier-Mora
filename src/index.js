import { Game } from './gameOfLife/classes/Game.js';

const game = new Game(20, 50, 'game-board', 'onClickCell');

window.onClickCell = (x, y) => {
  game.onClickCell(+x, +y);
};

window.onStart = () => {
  game.start();
};

window.onStop = () => {
  game.stop();
};
