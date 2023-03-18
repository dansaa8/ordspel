export default function randomWord(words, wordLength, repeatChars) {
        console.log(words);

        const filtered = words.filter((word) => {
            return word.length === wordLength;
        });
        return filtered[Math.floor(Math.random()*filtered.length)];
}