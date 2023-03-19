export default function randomWord(words, wordLength, repeatChars) {

    words = words.filter((word) => {
        return word.length === wordLength;
    });

    if (repeatChars === false) {
        words = words.filter((word) => {
            word = word.split('');
            for (let i = 0; i < word.length; i++) {
                if (word.indexOf(word[i]) !== word.lastIndexOf(word[i]))
                    return false;
            }
            return true;
        });
    }
    return words[Math.floor(Math.random() * words.length)];
}


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

// console.log(randomWord(words, 1, false).length);
console.log(randomWord(['hejsan', 'svejsan', 'pådig', 'öö'], 1, true));