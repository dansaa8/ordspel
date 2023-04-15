import { test, describe, expect, it } from '@jest/globals';
import randomWord from './randomWord.js';

const oneChar = ['å', 'ö'];
const twoChars = ['hö', 'så'];
const threeChars = ['sol', 'lås'];
const fourChars = ['lass', 'sass'];
const fiveChars = ['metad', 'raket']
const sixChars = ['bebodd', 'behåll', 'beläst', 'bensin'];
const sevenChars = ['barriär', 'ballong', 'barndom', 'balkong'];
const eightChars = ['baddräkt', 'behaglig', 'bakgrund', 'papegoja'];
const nineChars = ['atomvapen', 'beställer', 'avhjälper', 'bergsäker'];

const words = [
    ...oneChar, ...twoChars, ...threeChars,
    ...fourChars, ...fiveChars, ...sixChars,
    ...sevenChars, ...eightChars, ...nineChars
];

// Testerna nedan är heltäckande och verifierar att randomWord fungerar som den ska,
// dvs returnera rätt värde beroende på vilket värde de tre olika parametrarna har.

// para1 = arr som det ska plockas ut ord ifrån
// para2 = längden på ordet som ska returneras från randomWord
// para3 = ska ha boolean-värde true eller false, för att indikera ifall..
//  ..randomWord ska få returnera ord som har upprepande bokstäver, exempelvis dörr (som har två "r").

// Följande testning ser till så att randomWord returnerar rätt längd på ordet.
describe("randomWord(), test that returned lengths are correct", () => {
    const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    test.each(cases)(
        "given %i argument, returns %i",
        (length) => {
            const result = randomWord(words, length, true).length;
            expect(result).toEqual(length);
        }
    );
});

// Följande testning ser till så att randomWord endast..
// ..returnerar ord som inte har repeterande bokstäver (2 eller fler av samma bokstav).
describe("randomWord(), test that strings with no repeatedChars are returned when third argument is false", () => {
    const cases = [
        [6, ['beläst', 'bensin']],
        [7, ['barndom', 'balkong']],
        [8, ['bakgrund', 'papegoja']],
        [9, ['avhjälper', 'bergsäker']]
    ];
    test.each(cases)(
        "given %i and false as as arguments, returns %s or %s",
        (wordLength, expectedWords) => {
            const result = randomWord(words, wordLength, false);
            expect(expectedWords).toContain(result);
        }
    );
});

// Följande testning ser till så att randomWord även kan returnera ord som har flera instanser av samma bokstav.
describe("randomWord(), test that strings with repeatedChars also are returned when third argument is true", () => {
    const cases = [
        [6, [...sixChars]],
        [7, [...sevenChars]],
        [8, [...eightChars]],
        [9, [...nineChars]]
    ];
    test.each(cases)(
        "given %i and true as as arguments, returns str0 or str1 or str2 or str3",
        (wordLength, expectedWords) => {
            const result = randomWord(words, wordLength, true);
            expect(expectedWords).toContain(result);
        }
    );
});

// Följande testning ser till så att vi får ett null värde tillbaka när inget ord kan slumpas fram. 
describe('randomWord(), test that null is returned when no word can be generated', () => {
    it('should return null', () => {
        const tooLongLength = 10; // det finns inga ord med 10 bokstäver eller mer, i arrayen words[] längre upp på sidan.
        const result = randomWord(words, tooLongLength, true);
        expect(result).toBe(null);
    })
    it('should return null', () => {
        const result = randomWord(words, 0, true);
        expect(result).toBe(null);
    })
    it('should return null', () => {
        // Orden med fyra chars i words[]-arrayen har dubbla bokstäver.
        // Därmed så ska förväntat resultat vara null, när arg2 har value4 och arg3 har value false-(repeatingChars).
        const result = randomWord(words, 4, false);
        expect(result).toBe(null);
    })
})