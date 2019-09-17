import StingUtils from '../string';

describe(`StingUtils`, () => {
  describe(`isEmpty`, () => {
    it(`Should return false if string has value 'abc'`, () => {
      expect(StingUtils.isEmpty('abc')).toEqual(false);
    });

    it(`Should return true if string has value ''`, () => {
      expect(StingUtils.isEmpty('')).toBeTruthy();
    });

    it(`Should return true if string has value null`, () => {
      expect(StingUtils.isEmpty(null)).toBeTruthy();
    });

    it(`Should return true if string is undefined`, () => {
      expect(StingUtils.isEmpty(undefined)).toBeTruthy();
    });
  });

  describe(`isNotEmpty`, () => {
    it(`Should return true if string has value 'abc'`, () => {
      expect(StingUtils.isNotEmpty('abc')).toBeTruthy();
    });

    it(`Should return false if string has value ''`, () => {
      expect(StingUtils.isNotEmpty('')).toEqual(false);
    });

    it(`Should return false if string has value null`, () => {
      expect(StingUtils.isNotEmpty(null)).toEqual(false);
    });

    it(`Should return false if string is undefined`, () => {
      expect(StingUtils.isNotEmpty(undefined)).toEqual(false);
    });
  });
})
