import './Modal.css';
import { useState } from 'react';
export default function Highscore({ result, guesses, gameId, setPhase }) {
  const [name, setName] = useState();
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const highscore = {
      name,
    };

    await fetch(`http://localhost:5080/api/games/${gameId}/highscore`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(highscore),
    });

    setPhase('entry');
  };
  const duration =
    (new Date(result.endTime) - new Date(result.startTime)) / 1000;
  return (
    <div className="modal">
      <div className="modal-content won-game">
        <h1>Congrats you won the game</h1>
        <p>The correct word was {guesses.at(-1).string}</p>
        <p>Guesses: {guesses.length}</p>
        <p>Duration: {duration}s</p>
        <h2>Add to highscore</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Your name"
          />
          <button type="submit" className="stdBtn">Post highscore</button>
        </form>
      </div>
    </div>
  );
}
