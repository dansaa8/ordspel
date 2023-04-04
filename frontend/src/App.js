import { useState } from 'react';
import './App.css';
import Entry from './components/Entry';
import Settings from './components/Settings/Settings';

export default function App() {
  const [phase, setPhase] = useState('entry');
  // const [settings, setSettings] = useState({
  //   wordLength: 0,
  //   repeatChars: true,
  // });

  const [wordLength, setWordlength] = useState('any');
  const [repChars, setRepChars] = useState(false);  

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
        }[phase]
      }
    </>
  );
}
