export const evaluateCellStatus = (isAlive, aliveAdjacentCount) => {
  if (isAlive) {
    return aliveAdjacentCount >= 2 && aliveAdjacentCount <= 3;
  } else {
    return aliveAdjacentCount === 3;
  }
};
