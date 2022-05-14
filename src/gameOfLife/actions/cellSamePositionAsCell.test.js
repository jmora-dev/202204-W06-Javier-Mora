import { cellSamePositionAsCell } from './cellSamePositionAsCell.js';

describe('Given function evaluateCellStatus', () => {
  describe('When receive {x:1,y:2}, {x:1,y:2,foo:false}', () => {
    test('Then should be true', () => {
      const values = [
        { x: 1, y: 2 },
        { x: 1, y: 2, foo: false },
      ];
      const expectedResult = true;
      const result = cellSamePositionAsCell(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive {x:5,y:6}, {x:1,y:2,foo:false}', () => {
    test('Then should be false', () => {
      const values = [
        { x: 5, y: 6 },
        { x: 1, y: 2, foo: false },
      ];
      const expectedResult = false;
      const result = cellSamePositionAsCell(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
