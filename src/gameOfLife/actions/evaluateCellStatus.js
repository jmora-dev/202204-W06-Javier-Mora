export const evaluateCellStatus = (isAlive, aliveAdjacentCount) => {
  if (isAlive) {
    return aliveAdjacentCount >= 2 && aliveAdjacentCount <= 3 ? true : false;
  } else {
    return aliveAdjacentCount >= 3 ? true : false;
  }
};
