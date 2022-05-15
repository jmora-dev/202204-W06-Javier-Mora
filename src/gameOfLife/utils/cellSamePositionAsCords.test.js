import { cellSamePositionAsCords } from './cellSamePositionAsCords.js';

describe('Given function cellSamePositionAsCords', () => {
  describe('When receive {x:1,y:2}, 1,2', () => {
    test('Then should be true', () => {
      const values = [{ x: 1, y: 2 }, 1, 2];
      const expectedResult = true;
      const result = cellSamePositionAsCords(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive {x:1,y:2}, ...[1,2]', () => {
    test('Then should be true', () => {
      const values = [{ x: 1, y: 2 }, [1, 2]];
      const expectedResult = true;
      const result = cellSamePositionAsCords(values[0], ...values[1]);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive {x:5,y:6},1,2', () => {
    test('Then should be false', () => {
      const values = [{ x: 5, y: 6 }, 1, 2];
      const expectedResult = false;
      const result = cellSamePositionAsCords(...values);
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
      const result = cellSamePositionAsCords(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
