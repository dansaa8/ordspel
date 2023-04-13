import { useState } from 'react';
import WordRow from './WordRow';
import Highscore from './Highscore';

export default function Game({ wordLength, gameId, setPhase }) {
  const [gameState, setGameState] = useState('playing');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');
  const maxGuesses = 5;

  console.log('(from Game.js), current GameState: ', gameState);
  // x rows(val of maxguesses) of guesses, each row having the length of wordLength.
  const [lettersOfWords, setLettersOfWords] = useState(
    Array.from({ length: maxGuesses }, () =>
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

  function renderWordRows(rowsCount) {
    const rows = [];
    for (let i = 0; i < rowsCount; i++) {
      const newRow = (
        <WordRow
          key={i}
          formNr={i}
          guesses={guesses}
          lettersOfWords={lettersOfWords}
          setLettersOfWords={setLettersOfWords}
          handleBtnClick={handleBtnClick}
          gameState={gameState}
        />
      );
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
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Validate
      </button>
      {(function () {
        if (gameState === 'won') {
          return <Highscore result={result} guesses={guesses}/>;
        }
      })()}
    </div>
  );
}
