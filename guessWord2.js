import countLetters from "./countLetters.js";

export default function guessWord2(target, guess) {
    guess = guess.toUpperCase().split('');
    target = target.toUpperCase().split('');

    const uniqueCharsInGuess = countLetters(guess);
    const uniqueCharsInTarget = countLetters(target);

    const temp = [];
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === target[i]) {
            temp.push({ letter: guess[i], result: 'correct' });
            decrementCharCount(guess[i]);
        }
        else if (!target.includes(guess[i])) {
            temp.push({ letter: guess[i], result: 'incorrect' });
        }
     else {

    }

    console.log('guess: ', uniqueCharsInGuess);
    console.log('target: ', uniqueCharsInTarget);
    }
    return temp;

    function decrementCharCount(letterToBeDecremented) {
        uniqueCharsInGuess.map(obj => { if (obj.letter === letterToBeDecremented) obj.count-- });
        uniqueCharsInTarget.map(obj => { if (obj.letter === letterToBeDecremented) obj.count-- });
    }
}


console.log(guessWord2('Marssss', 'Barssss'));