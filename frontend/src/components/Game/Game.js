import { useState } from 'react';
import WordRow from './WordRow';

export default function Game({ wordLength, gameId }) {
  const [gameState, setGameState] = useState('playing');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');

  // Five rows of guesses, each row having the length of wordLength.
  const [lettersOfWords, setLettersOfWords] = useState(
    Array.from({ length: 5 }, () =>
      Array.from({ length: wordLength }, () => '')
    )
  );

  async function handleBtnClick(event) {
    event.preventDefault();
    event.stopPropagation();
    const guessStr = lettersOfWords[guesses.length].join('');
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
    setGuesses(data.guesses);
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
