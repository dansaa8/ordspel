export default function guessWord(target, guess) {
  guess = guess.toUpperCase().split('');
  target = target.toUpperCase().split('');

  const temp = [];
  for (let i = 0; i < guess.length; i++) {

    if (guess[i] === target[i]) {
      temp.push({ letter: guess[i], result: 'correct' });

    } 

    else if (!target.includes(guess[i])) {
      temp.push({ letter: guess[i], result: 'incorrect' });

    } 

    else {
      let guessCharCount = 0;
      guess.forEach((char) => {
        if (char === guess[i]) {
          guessCharCount++;
        }
      });

      let targetCharCount = 0;
      target.forEach((char) => {
        if (char === target[i]) {
          targetCharCount++;
        }
      });

      if (guessCharCount > targetCharCount) {
        temp.push({ letter: guess[i], result: 'incorrect' });
      } else {
        temp.push({ letter: guess[i], result: 'misplaced' });

      }
    }
  }
  console.log(temp);
  return temp;
}

guessWord('CYKLA', 'HALLÅ');