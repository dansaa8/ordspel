import countLetters from "./countLetters.js";

export default function guessWord2(target, guess) {
    guess = guess.toUpperCase().split('');
    target = target.toUpperCase().split('');

    const charsInGuess = countLetters(guess);
    const charsInTarget = countLetters(target);

    const temp = [];
    for (let i = 0; i < guess.length; i++) {
        console.log(charsInGuess);
        if (guess[i] === target[i]) {
            temp.push({ letter: guess[i], result: 'correct' });
            charsInGuess.map(obj => { if(obj.letter === guess[i]) obj.count-- });
            charsInTarget.map(obj => { if(obj.letter === guess[i]) obj.count-- });
        }
        else if (!target.includes(guess[i])) {
            temp.push({ letter: guess[i], result: 'incorrect' });
        }
     else {
           
    }
    }
    return temp;
}

console.log(guessWord2('Mars', 'Bars'));