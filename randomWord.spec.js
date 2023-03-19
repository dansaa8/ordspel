import { test, describe, expect, it } from '@jest/globals';
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


// Note to self: Släng in test som ser till att när repeatchars är false
// så ska endast ord med rätt längd och utan duplicate chars returneras.
// t.ex beläst och bensin i ord med sex chars.

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

// Följande testning ser till så att vi får ett null värde tillbaka när inget ord kan slumpas fram. 
describe('randomWord(), test that null is returned when no word can be generated', () => {
    it('should return null', () => {
        const tooLongLength = 10;
        const result = randomWord(words, tooLongLength, true);
        expect(result).toBe(null);
    })
    it('should return null', () => {
        const result = randomWord(words, 0, true);
        expect(result).toBe(null);
    })
})