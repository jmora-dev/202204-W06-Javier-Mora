export const renderCell = (cell, onClickName) => {
  const cellStatus = cell.isAlive ? 'is-alive' : 'is-dead';
  return `<div onClick="${onClickName}(${cell.x}, ${cell.y})" class="cell cell--${cellStatus}"></div>`;
};
