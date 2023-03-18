import { describe, expect, it } from '@jest/globals';
import randomWord from './randomWord.js';

// the first two words in every array has a char repeated atleast twice 
const sixChars = ['bebodd', 'behåll', 'beläst', 'bensin'];
const sevenChars = ['barriär', 'ballong', 'barndom', 'balkong'];
const eightChars = ['baddräkt', 'behaglig', 'bakgrund', 'papegoja'];
const nineChars = ['atomvapen', 'beställer', 'avhjälper', 'bergsäker'];
const words = [...sixChars, ...sevenChars, ...eightChars, ...nineChars];

// self-explanatory template
describe('randomWord', () => {
    it('returns a word with 7 words', () => {
        const repeatChars = false;
        const result = randomWord(words, 7, repeatChars);
        expect(result).toHaveLength(7);
    })
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

