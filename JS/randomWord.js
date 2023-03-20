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
    if (words.length > 0 && !undefined) {
        return words[Math.floor(Math.random() * words.length)];
    } else {
        return null;
    }
}