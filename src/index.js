import { Game } from './gameOfLife/classes/Game.js';

const game = new Game(35, 80, 500, 'game-board', 'onClickCell');

window.onClickCell = (x, y) => {
  game.onClickCell(+x, +y);
};

window.onStart = () => {
  game.start();
};

window.onStop = () => {
  game.stop();
};

window.onRandom = () => {
  game.random();
};

window.onClear = () => {
  game.clear();
};
