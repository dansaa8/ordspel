import { describe, expect, it } from '@jest/globals';
import evalWord from './evalWord.js';

describe('evalWord', () => {

    // dessa testerna är heltäckande. 
    // många olika typer av strängar testas
    // med olika längder och med gissningar
    // som har väldigt varierande grad av
    // rätt i gissningsargumentet (andra parametern).

    it('returns an expected array', () => {
        const result = evalWord('CYKLA', 'HALLÅ');
        const expectedArray = [
            { letter: 'H', result: 'incorrect' },
            { letter: 'A', result: 'misplaced' },
            { letter: 'L', result: 'incorrect' }, // (Eftersom det redan finns ett korrekt L)
            { letter: 'L', result: 'correct' },
            { letter: 'Å', result: 'incorrect' }
        ];
        expect(result).toStrictEqual(expectedArray);
    });

    it('returns an expected array', () => {
        const result = evalWord('Daniel', 'Leinad');
        const expectedArray = [
            { letter: 'L', result: 'misplaced' },
            { letter: 'E', result: 'misplaced' },
            { letter: 'I', result: 'misplaced' },
            { letter: 'N', result: 'misplaced' },
            { letter: 'A', result: 'misplaced' },
            { letter: 'D', result: 'misplaced' }
        ];
        expect(result).toStrictEqual(expectedArray);
    });

    it('returns an expected array', () => {
        const result = evalWord('Leksak', 'Kakask');
        const expectedArray = [
            { letter: 'K', result: 'incorrect' },
            { letter: 'A', result: 'misplaced' },
            { letter: 'K', result: 'correct' }, // (Eftersom det redan finns ett korrekt L)
            { letter: 'A', result: 'incorrect' },
            { letter: 'S', result: 'misplaced' },
            { letter: 'K', result: 'correct' }
        ];
        expect(result).toStrictEqual(expectedArray);
    });

    it('returns an expected array', () => {
        const result = evalWord('RINGARNA', 'RIDDAREN');
        const expectedArray = [
            { letter: 'R', result: 'correct' },
            { letter: 'I', result: 'correct' },
            { letter: 'D', result: 'incorrect' },
            { letter: 'D', result: 'incorrect' },
            { letter: 'A', result: 'correct' },
            { letter: 'R', result: 'correct' },
            { letter: 'E', result: 'incorrect' },
            { letter: 'N', result: 'misplaced' }
        ];
        expect(result).toStrictEqual(expectedArray);
    });

    it('returns an expected array', () => {
        const result = evalWord('SkIdBACkE', 'OSTHyVeLN');
        const expectedArray = [
            { letter: 'O', result: 'incorrect' },
            { letter: 'S', result: 'misplaced' },
            { letter: 'T', result: 'incorrect' },
            { letter: 'H', result: 'incorrect' },
            { letter: 'Y', result: 'incorrect' },
            { letter: 'V', result: 'incorrect' },
            { letter: 'E', result: 'misplaced' },
            { letter: 'L', result: 'incorrect' },
            { letter: 'N', result: 'incorrect' }
        ];
        expect(result).toStrictEqual(expectedArray);
    });


    it('returns an expected array', () => {
        const result = evalWord('SNOK', 'FELA');
        const expectedArray = [
            { letter: 'F', result: 'incorrect' },
            { letter: 'E', result: 'incorrect' },
            { letter: 'L', result: 'incorrect' },
            { letter: 'A', result: 'incorrect' },
        ];
        expect(result).toStrictEqual(expectedArray);
    });

    it('returns an expected array', () => {
        const result = evalWord('Ö', 'Å');
        const expectedArray = [
            { letter: 'Å', result: 'incorrect' },
        ];
        expect(result).toStrictEqual(expectedArray);
    });

    it('returns an expected array', () => {
        const result = evalWord('Ö', 'Ö');
        const expectedArray = [
            { letter: 'Ö', result: 'correct' },
        ];
        expect(result).toStrictEqual(expectedArray);
    });

});

