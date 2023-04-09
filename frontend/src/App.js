import { useEffect, useState } from 'react';
import './App.css';
import Entry from './components/Entry';
import Settings from './components/Settings/Settings';
import GameActive from './components/GameActive';

export default function App() {
  const [phase, setPhase] = useState('entry');
  const [wordLength, setWordlength] = useState('any');
  const [repChars, setRepChars] = useState(false);

  // fetch('http://localhost:5080');
  // useEffect(() => {
  //   async function loadHighscores() {
  //     const res = await fetch('/highscores');
  //     const payload = await res.json();
  //     console.log(payload.data);
  //   }

  useEffect(() => {
    async function loadHighscores() {
      const res = await fetch("./highscores");
      const payload = await res.json();
      console.log(payload.data);
    }
    loadHighscores();
  }, []);

  return (
    <>
      {
        {
          entry: <Entry setPhase={setPhase} />,
          settings: (
            <Settings
              setPhase={setPhase}
              wordLength={wordLength}
              setWordlength={setWordlength}
              repChars={repChars}
              setRepChars={setRepChars}
            />
          ),
          gameActive: <GameActive
            wordLength={wordLength}
            repChars={repChars}
          />
        }[phase]
      }
    </>
  );
}
