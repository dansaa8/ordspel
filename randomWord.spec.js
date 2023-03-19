import {test, describe, expect, it } from '@jest/globals';
import randomWord from './randomWord.js';

// the first two words in every array has a char repeated atleast twice 
const oneChar = ['å', 'ö'];
const twoChars = ['hö', 'så'];
const threeChars = ['sol', 'lås'];
const fourChars = ['fyra', 'myra'];
const fiveChars = ['metad', 'raket']
const sixChars = ['bebodd', 'behåll', 'beläst', 'bensin'];
const sevenChars = ['barriär', 'ballong', 'barndom', 'balkong'];
const eightChars = ['baddräkt', 'behaglig', 'bakgrund', 'papegoja'];
const nineChars = ['atomvapen', 'beställer', 'avhjälper', 'bergsäker'];
const words = [...oneChar, ...twoChars, ...threeChars, ...fourChars, ...fiveChars, ...sixChars, ...sevenChars, ...eightChars, ...nineChars];

const lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9];



// Följande testning ser till så att randomWord returnerar rätt längd på ordet.
const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9];
describe("randomWord(), test that returned lengths are correct", () => {
  test.each(cases)(
    "given %i argument, returns %i",
    (length) => {
      const result = randomWord(words, length, true).length;
      expect(result).toEqual(length);
    }
  );
});



describe('randomWord', () => {
    it('returns a word with 7 chars', () => {
        const repeatChars = false;
        const result = randomWord(words, 7, repeatChars);
        expect(result).toHaveLength(7);
    })
    it('returns a word with 8 chars', () => {
        const repeatChars = false;
        const result = randomWord(words, 8, repeatChars);
        expect(result).toHaveLength(8);
    })

    // describe('randomWord', () => {
    //     it('returns the word "gitarr"'), () => {
    //         const result = randomWord(words, 6, true);
    //         expect(result).tobe('gitarr');
    //     }

    // })

    // describe('randomWord', () => {
    //     it('returns the word "javascript"'), () => {
    //         const result = randomWord(words, 10, true);
    //         expect(result).tobe('gitarr');
    //     }

    // })


})