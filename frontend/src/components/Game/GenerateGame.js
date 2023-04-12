import { useState, useEffect } from 'react';
import Game from './Game';

export default function GenerateGame({ setPhase, settings }) {
  const [gameId, setGameId] = useState(null);
  const [wordLength, setWordLength] = useState(0);

  useEffect(() => {
    const startGame = async () => {
      const res = await fetch('api/games', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      setGameId(data.id);
      setWordLength(data.wordLength);
    };

    startGame();
  }, []);

  if (gameId && wordLength) {
    return (
      <div className="App">
        <Game wordLength={wordLength} gameId={gameId}/>
      </div>
    );
  } else {
    return <div className="App">Loading...</div>;
  }
}
