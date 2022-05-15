import { Game } from './gameOfLife/classes/Game.js';

const game = new Game(15, 20, 'app', 'onClickCell');

window.onClickCell = (x, y) => {
  game.onClickCell(+x, +y);
};

window.onStart = () => {
  game.start();
};

window.onStop = () => {
  game.stop();
};
