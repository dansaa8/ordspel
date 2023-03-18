export default function countLetters(arr) {
    const uniqueChars = [];
    for (let i = 0; i < arr.length; i++) {
        const index = uniqueChars.findIndex(element => element.letter === arr[i]);
        if (index < 0) {
            uniqueChars.push({
                letter: arr[i],
                count: 1,
            });
        }
        else {
            uniqueChars[index].count += 1;
        }
    }
    return uniqueChars;
}