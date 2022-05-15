import { renderCell } from './renderCell.js';

export const renderBoard = (board, onClickName) => {
  const gridColumns = `grid-template-columns: repeat(${board.width}, 1fr)`;
  let html = `<div class="board" style="${gridColumns}">`;
  const cellsRenders = board.cells.map((cell) => renderCell(cell, onClickName));
  html += cellsRenders.join('');
  html += '</div>';
  return html;
};
