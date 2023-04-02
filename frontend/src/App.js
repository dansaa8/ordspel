import { useState } from 'react';
import './App.css';
import EntryPoint from './components/EntryPoint';
import Settings from './components/Settings';

export default function App() {
  const [phase, setPhase] = useState('entryPoint');

  return (
    <div className="gameContainer">
      {
        {
          entryPoint: <EntryPoint setPhase={setPhase}/>,
          settings: <Settings />
        }[phase]
      }
    </div>
  );
}
