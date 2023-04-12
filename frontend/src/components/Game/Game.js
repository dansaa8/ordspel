import { useState } from 'react';
import WordRow from './WordRow';

export default function Game({ wordLength, gameId }) {
  const [gameState, setGameState] = useState('playing');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');

  console.log('guesses state i game: ', guesses);

  // Five rows of guesses, each row having the length of wordLength.
  const [lettersOfWords, setLettersOfWords] = useState(
    Array.from({ length: 5 }, () =>
      Array.from({ length: wordLength }, () => '')
    )
  );
  console.log(lettersOfWords);
  console.log(gameId);

  async function handleBtnClick(event) {
    event.preventDefault();
    event.stopPropagation();
    const guessStr = lettersOfWords[guesses.length].join("");
    console.log(guessStr);
    // event.nativeEvent.stopImmediatePropagation();
    const res = await fetch(`api/games/${gameId}/guesses`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guess: guessStr }),
    });
    const data = await res.json();

    if (data.correct) {
      setResult(data.result);
      setGameState('won');
    }
    console.log('på frontend, gameID:', gameId);
    console.log('på frontend, data:', data);

    setGuesses(data.guesses)
  }

  return (
    <div className="gameCtr">
      <WordRow
        wordLength={wordLength}
        formNr={0}
        guesses={guesses}
        lettersOfWords={lettersOfWords}
        setLettersOfWords={setLettersOfWords}
        handleBtnClick={handleBtnClick}
      />
      <WordRow
        wordLength={wordLength}
        formNr={1}
        guesses={guesses}
        lettersOfWords={lettersOfWords}
        setLettersOfWords={setLettersOfWords}
        handleBtnClick={handleBtnClick}
      />
      <WordRow
        wordLength={wordLength}
        formNr={2}
        guesses={guesses}
        lettersOfWords={lettersOfWords}
        setLettersOfWords={setLettersOfWords}
        handleBtnClick={handleBtnClick}
      />
      <WordRow
        wordLength={wordLength}
        formNr={3}
        guesses={guesses}
        lettersOfWords={lettersOfWords}
        setLettersOfWords={setLettersOfWords}
        handleBtnClick={handleBtnClick}
      />
      <WordRow
        wordLength={wordLength}
        formNr={4}
        guesses={guesses}
        lettersOfWords={lettersOfWords}
        setLettersOfWords={setLettersOfWords}
        handleBtnClick={handleBtnClick}
      />
      <button
        type="submit"
        value="submit"
        form={'wordRow' + guesses.length}
        className="stdBtn"
      // onSubmit={handleBtnClick}
      >
        Validate
      </button>
    </div>
  );
}
