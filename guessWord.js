export default function guessWord(target, guess) {
    guess = guess.toUpperCase().split('');
    target = target.toUpperCase().split('');
    const wordLength = guess.length;

    const temp = Array(wordLength).fill(null);
    for (let i = 0; i < wordLength; i++) {
        if (guess[i] === target[i]) {
            temp.splice(i, 1, { letter: guess[i], result: 'correct' });
            target.splice(i, 1, null);
            guess.splice(i, 1, null);
        }
    }
    for (let i = 0; i < wordLength; i++) {
        if (guess[i] !== null) {
            const index = target.findIndex(char => char === guess[i]);
            if (index >= 0) {
                temp.splice(i, 1, { letter: guess[i], result: 'misplaced' });
                target.splice(index, 1, null);
                guess.splice(i, 1, null);
            } else {
                temp.splice(i, 1, { letter: guess[i], result: 'incorrect' });
            }
        }
    }
    return temp;
}