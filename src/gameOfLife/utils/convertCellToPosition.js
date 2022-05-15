export const convertCellToPosition = (object) => {
  if (typeof object !== 'object') {
    throw new TypeError('The parameter must be an object');
  }
  return [object.x, object.y];
};
