import { useState } from 'react';
import WordRow from './WordRow';

export default function Game({ wordLength, gameId }) {
  const [gameState, setGameState] = useState('playing');
  const [inputText, setInputText] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');
  const guessNr = guesses.length + 1;
  console.log(guessNr);

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
      <WordRow wordLength={wordLength} formId={1} guessNr={guessNr} />
      <WordRow wordLength={wordLength} formId={2} guessNr={guessNr}/>
      <WordRow wordLength={wordLength} formId={3} guessNr={guessNr}/>
      <WordRow wordLength={wordLength} formId={4} guessNr={guessNr}/>
      <WordRow wordLength={wordLength} formId={5} guessNr={guessNr}/>
      <button
        type="submit"
        form={'wordRow' + guessNr} 
        className="stdBtn"
        onSubmit={handleSubmit}
      >Validate</button>
    </div>
  );
}
