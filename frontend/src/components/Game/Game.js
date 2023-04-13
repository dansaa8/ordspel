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

  const maxGuesses = 5;

  function renderWordRows(rowsCount) {
    const rows = [];
    for (let i = 0; i < rowsCount; i++) {
      const newRow =
        <WordRow
          wordLength={wordLength}
          formNr={i}
          guesses={guesses}
          lettersOfWords={lettersOfWords}
          setLettersOfWords={setLettersOfWords}
          handleBtnClick={handleBtnClick}
        />
      rows.push(newRow);
    }
    return rows;
  }

  return (
    <div className="gameCtr">
      {renderWordRows(maxGuesses)}
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
