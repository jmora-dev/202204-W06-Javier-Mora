import { Board } from './Board.js';

describe('Given class Board', () => {
  describe('When receive 2,1 as constructor parameters', () => {
    test('Then should be {height: 2, width:1, cells:[{x:0,y:0,team:null},{x:0,y:1,team:null}]}', () => {
      const values = [2, 1];
      const expectedResult = {
        height: 2,
        width: 1,
        cells: [
          { x: 0, y: 0, team: null },
          { x: 0, y: 1, team: null },
        ],
      };
      const result = new Board(...values);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive 1,2 as constructor parameters', () => {
    test('Then should be {height: 1, width:2, cells:[{x:0,y:0,team:null},{x:1,y:0,team:null}]}', () => {
      const values = [1, 2];
      const expectedResult = {
        height: 1,
        width: 2,
        cells: [
          { x: 0, y: 0, team: null },
          { x: 1, y: 0, team: null },
        ],
      };
      const result = new Board(...values);
      expect(result).toEqual(expectedResult);
    });
  });
});
