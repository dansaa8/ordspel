import { describe, expect, it } from '@jest/globals';
import guessWord from './guessWord.js';

describe('guessWord', () => {
    it('returns an array', () => {
    const result = guessWord('CYKLA', 'HALLÅ');
    const expectedArray = [
        {letter: 'H', result: 'incorrect'},
        {letter: 'A', result: 'misplaced'},
        {letter: 'L', result: 'incorrect'}, // (Eftersom det redan finns ett korrekt L)
        {letter: 'L', result: 'correct'},
        {letter: 'Å', result: 'incorrect'}
    ];
    expect(result).toStrictEqual(expectedArray);
    });
});
