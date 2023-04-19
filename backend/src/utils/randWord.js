import wordList from './wordList.js';

export default function randWord(settings) {
  return 'BILL';
  let words = wordList;
  const repeatChars = settings.repeatingChars;

  if (settings.wordLength != 'any') {
    const requestedLength = Number(settings.wordLength);
    words = words.filter((word) => {
      return word.length === requestedLength;
    });
  }

  if (repeatChars === false) {
    words = words.filter((word) => {
      word = word.split('');
      for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) return false;
      }
      return true;
    });
  }
  if (words.length > 0 && !undefined) {
    return words[Math.floor(Math.random() * words.length)];
  } else {
    return null;
  }
}
