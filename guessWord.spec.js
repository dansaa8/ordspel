import { describe, expect, it } from '@jest/globals';
import guessWord from './guessWord.js';

describe('guessWord', () => {
    it('returns an expected array', () => {
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

    it('returns an expected array', () => {
        const result = guessWord('Daniel', 'Leinad');
        const expectedArray = [
            {letter: 'L', result: 'misplaced'},
            {letter: 'E', result: 'misplaced'},
            {letter: 'I', result: 'misplaced'},
            {letter: 'N', result: 'misplaced'},
            {letter: 'A', result: 'misplaced'},
            {letter: 'D', result: 'misplaced'}
        ];
        expect(result).toStrictEqual(expectedArray);
        });



