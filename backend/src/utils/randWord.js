export default function randWord(settings, words) {
  if (words.length > 0 && !undefined) {
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
    return words[Math.floor(Math.random() * words.length)];
  } else {
    return null;
  }
}
