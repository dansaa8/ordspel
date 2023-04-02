import { useState } from 'react';
import './App.css';
import EntryPoint from './components/EntryPoint';
import Settings from './components/Settings';

export default function App() {
  const [phase, setPhase] = useState('entryPoint');
  const [wordLength, setWordLength] = useState(4);
  const [repeatChars, setRepeatChars] = useState(true);

  return (
    <>
      {
        {
          entryPoint: <EntryPoint setPhase={setPhase} />,
          settings: (
            <Settings
              setPhase={setPhase}
              setWordLength={setWordLength}
              setRepeatChars={setRepeatChars}
            />
          ),
        }[phase]
      }
    </>
  );
}
