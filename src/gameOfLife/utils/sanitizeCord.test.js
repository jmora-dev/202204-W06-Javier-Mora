import { sanitizeCord } from './sanitizeCord.js';

describe('Given function sanitizeCord', () => {
  describe('When receive "text"', () => {
    test('Then should throw a TypeError', () => {
      const values = ['text'];
      expect(() => sanitizeCord(...values)).toThrow(TypeError);
    });
  });

  describe('When receive 1,"text"', () => {
    test('Then should throw a TypeError', () => {
      const values = [1, 'text'];
      expect(() => sanitizeCord(...values)).toThrow(TypeError);
    });
  });

  describe('When receive 0,5', () => {
    test('Then should be 0', () => {
      const values = [0, 5];
      const expectedResult = 0;
      const result = sanitizeCord(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive -1,5', () => {
    test('Then should be 5', () => {
      const values = [-1, 5];
      const expectedResult = 5;
      const result = sanitizeCord(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive 6,5', () => {
    test('Then should be 5', () => {
      const values = [6, 5];
      const expectedResult = 0;
      const result = sanitizeCord(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
