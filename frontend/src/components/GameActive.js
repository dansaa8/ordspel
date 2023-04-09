import { useState, useEffect } from 'react';
export default function GameActive({ setPhase, settings }) {
  const [gameId, setGameId] = useState(null);
  console.log(settings);
  console.log(JSON.stringify(settings));

  useEffect(() => {
    const startGame = async () => {
      const res = await fetch('api/games', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      console.log(data);
      setGameId(data.id);
    };

    startGame();
  }, []);

//   if (gameId) {
//     return <div>
//     </div>;
//   }
}
