import { useState } from 'react';
import WordRow from './WordRow';

export default function Game({ wordLength, gameId }) {
  const [gameState, setGameState] = useState('playing');
  const [inputText, setInputText] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');

  async function handleSubmit() {
    //if sats som kollar att alla inputs är ifyllda i nuvarande row.
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
      <WordRow wordLength={wordLength} formId={1} />
      <WordRow wordLength={wordLength} formId={2} />
      <WordRow wordLength={wordLength} formId={3} />
      <WordRow wordLength={wordLength} formId={4} />
      <WordRow wordLength={wordLength} formId={5} />
      <input
        type="submit"
        form={'wordRow' + guesses.length + 1} 
        className="stdBtn"
        onSubmit={() => handleSubmit}
      ></input>
    </div>
  );
}
