import { useState } from 'react';
import WordRow from './WordRow';

export default function Game({ wordLength, gameId }) {
  const [gameState, setGameState] = useState('playing');
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');
  
  // Five rows of guesses, each row having the length of wordLength.
  // const [inputWord, setInputWord] = useState(Array(5).fill(Array(wordLength).fill("")));
  const [inputWord, setInputWord] = useState(Array.from({length: 5},()=> Array.from({length: wordLength}, () => "")));
  console.log(inputWord);

  async function handleBtnClick(event) {
    event.preventDefault();
    event.stopPropagation();
    const guessStr = inputWord[guesses.length].join().toUpperCase() ;
    console.log(guessStr);
    // event.nativeEvent.stopImmediatePropagation();
    const res = await fetch(`api/games/${gameId}/guesses`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guess: inputWord }),
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
      <WordRow wordLength={wordLength} formId={0} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} handleBtnClick={handleBtnClick}/>
      <WordRow wordLength={wordLength} formId={1} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} handleBtnClick={handleBtnClick}/>
      <WordRow wordLength={wordLength} formId={2} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} handleBtnClick={handleBtnClick}/>
      <WordRow wordLength={wordLength} formId={3} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} handleBtnClick={handleBtnClick}/>
      <WordRow wordLength={wordLength} formId={4} guessNr={guesses.length} inputWord={inputWord} setInputWord={setInputWord} handleBtnClick={handleBtnClick}/>
      <button
        type="submit"
        value="submit"
        form={'wordRow' + guesses.length}
        className="stdBtn"
        // onSubmit={handleBtnClick}
      >Validate</button>
    </div>
  );
};

