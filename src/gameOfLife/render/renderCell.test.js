import { renderCell } from './renderCell.js';
import { Cell } from '../classes/Cell.js';

describe('Given function renderCell', () => {
  describe('When receive new Cell(1, 2, true), "onClick"', () => {
    test('Then should be a div sting with onClick event (1,2) and class cell and cell--is-alive', () => {
      const result = renderCell(new Cell(1, 2, true), 'onClick');
      const expectedResult =
        '<div onClick="onClick(1, 2)" class="cell cell--is-alive"></div>';
      expect(result).toBe(expectedResult);
    });
  });
  describe('When receive new Cell(1, 2, false), "onClick"', () => {
    test('Then should be a div sting with onClick event (1,2) and class cell and cell--is-dead', () => {
      const result = renderCell(new Cell(1, 2, false), 'onClick');
      const expectedResult =
        '<div onClick="onClick(1, 2)" class="cell cell--is-dead"></div>';
      expect(result).toBe(expectedResult);
    });
  });
});
