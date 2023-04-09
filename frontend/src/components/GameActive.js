import { useState, useEffect } from 'react';
export default function GameActive({ setPhase, settings }) {
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    const startGame = async () => {
      const res = await fetch('http://localhost:5080/games', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      setGameId(data.id);
    };

    startGame();
  }, []);

  if (gameId) {
    return {};
  }
}
