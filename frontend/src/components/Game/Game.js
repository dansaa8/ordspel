import { useState } from 'react';
import WordRow from './WordRow';

export default function Game({ wordLength, gameId }) {
  const [gameState, setGameState] = useState('playing');
  const [inputWord, setInputWord] = useState(Array(wordLength).fill(""));
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(`api/games/${gameId}/guesses`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guess: 'gissning' }),
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
      <WordRow wordLength={wordLength} formId={0} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} />
      {/* <WordRow wordLength={wordLength} formId={1} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} />
      <WordRow wordLength={wordLength} formId={2} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} />
      <WordRow wordLength={wordLength} formId={3} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} />
      <WordRow wordLength={wordLength} formId={4} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} /> */}
      <button
        type="submit"
        form={'wordRow' + guesses.length}
        className="stdBtn"
        onSubmit={handleSubmit}
      >Validate</button>
    </div>
  );
};

