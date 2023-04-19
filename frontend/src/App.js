import { useState } from 'react';
import Entry from './components/Entry';
import Settings from './components/Settings/Settings';
import GenerateGame from './components/Game/GenerateGame';

export default function App() {
  const [phase, setPhase] = useState('entry');
  const [settings, setSettings] = useState({
    wordLength: 'any',
    repeatingChars: true,
  });

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
          generateGame: (
            <GenerateGame
              setPhase={setPhase}
              settings={settings} />),
        }
        [phase]
      }
    </>
  );
}