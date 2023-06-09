import { useState } from 'react';

export default function Highscore({ result, settings, gameId, setPhase }) {
  const [name, setName] = useState('');

  const duration =
    (new Date(result.endTime) - new Date(result.startTime)) / 1000;

  const strGuesses = result.guesses.map((guess) => {
    return guess.string;
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const highscore = {
      name: name,
      time: duration,
      guesses: strGuesses,
      settings: settings,
    };

    await fetch(`api/games/${gameId}/highscore`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(highscore),
    });

    setPhase('entry');
  };

  const printGuesses = () => {
    const guesses = [];
    for (let i = 0; i < result.guesses.length; i++) {
      guesses.push(
        <p key={'guess' + i}>
          guess{i + 1}: {strGuesses[i]}
        </p>
      );
    }
    return guesses;
  };

  return (
    <div className="modal">
      <div className="modal-content won-game">
        <h1>Congrats, you won the game!</h1>
        <p>The correct word was {result.guesses.at(-1).string}</p>
        <div className="gameStats">
          <h2>Your guesses: {result.guesses.string}</h2>
          {printGuesses(false, false)}
          <h2>Time:</h2>
          <p>Duration: {duration}s</p>
        </div>
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
          <button
            className="stdBtn cancelBtn"
            onClick={() => {
              setPhase('entry');
            }}
          >
            No thanks!
          </button>
        </form>
      </div>
    </div>
  );
}
