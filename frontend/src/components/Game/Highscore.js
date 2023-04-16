import './Modal.css';
import { useState } from 'react';
export default function Highscore({ result, settings, gameId, setPhase }) {
  const [name, setName] = useState('');

  const duration =
    (new Date(result.endTime) - new Date(result.startTime)) / 1000;

  const strGuesses = result.guesses.map((guess) => {
    return guess.string;
  });

  console.log(settings);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const highscore = {
      name: name,
      time: duration,
      guesses: strGuesses,
      settings: settings,
    };

    console.log(highscore);
    //`http://localhost:5080/api/games/${gameId}/highscore` - efter build
    await fetch(`api/games/${gameId}/highscore`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(highscore),
    });

    setPhase('entry');
  };

  console.log('in highscore: ', result);

  return (
    <div className="modal">
      <div className="modal-content won-game">
        <h1>Congrats, you won the game!</h1>
        <p>The correct word was {result.guesses.at(-1).string}</p>
        <p>Guesses: {result.guesses.string}</p>
        <p>Duration: {duration}s</p>
        <h2>Add to highscore</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Your name"
            required
          />
          <button type="submit" className="stdBtn">
            Post highscore
          </button>
        </form>
      </div>
    </div>
  );
}
