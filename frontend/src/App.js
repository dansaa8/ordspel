import { useEffect, useState } from 'react';
import './App.css';
import Entry from './components/Entry';
import Settings from './components/Settings/Settings';
import GameActive from './components/GameActive';

export default function App() {
  const [phase, setPhase] = useState('entry');
  const [settings, setSettings] = useState({
    wordLength: 'any',
    repeatingChars: true
  });

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
              settings={settings}
              setSettings={setSettings}
            />
          ),
          gameActive: <GameActive
          settings={settings}
          />
        }[phase]
      }
    </>
  );
}
