import { useState } from 'react';
import WordRow from './WordRow';
import Highscore from './Highscore';

export default function Game({ wordLength, gameId, setPhase, settings }) {
  const [gameState, setGameState] = useState('playing');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const maxGuesses = 5;

  const [lettersOfWords, setLettersOfWords] = useState(
    Array.from({ length: maxGuesses }, () =>
      Array.from({ length: wordLength }, () => '')
    )
  );

  async function handleBtnClick(event) {
    event.preventDefault();
    event.stopPropagation();
    const guessStr = lettersOfWords[guesses.length].join('');
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
    <div className="stdCtr game">
      {renderWordRows(maxGuesses)}
      <button
        type="submit"
        value="submit"
        form={'wordRow' + guesses.length}
        className="stdBtn validate"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Validate
      </button>
      {(function () {
        if (gameState === 'won') {
          return (
            <Highscore
              result={result}
              settings={settings}
              gameId={gameId}
              setPhase={setPhase}
            />
          );
        } else if (guesses.length === maxGuesses) {
          return (
            <div className='modal'>
              <div className='modal-content lost-game'>
                <h1>Sorry, you lost the game.</h1>
                <button className='stdBtn' onClick={() => { setPhase('entry') }}>Back to main</button>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
}
