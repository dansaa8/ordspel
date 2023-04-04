import RepCharsSelector from './RepCharsSelector';
import './Settings.css';
import WordLengthSelector from './WordLengthSelector';
import { useState, useEffect, useMemo } from 'react';

export default function Settings({
  setPhase,
  wordLength,
  setWordlength,
  repChars,
  setRepChars,
}) {
  
  // Sync preselected settings with saved state from App.
  // Abbrevations: WL = wordLength, RC = repChars
  const [tempWL, setTempWL] = useState(wordLength);
  const [tempRC, setTempRC] = useState(repChars);

    const handleBtnClick = (saveChanges) => {
      if(saveChanges === true) {
        setWordlength(tempWL)
        setRepChars(tempRC)
      } else {
        // nothing is saved
      }
      setPhase('entry');
  };

  return (
    <>
      <h1 className="optionsTxt">Options</h1>
      <div className="settingsBox">
        <WordLengthSelector
          wordLength={tempWL}
          setWordlength={setTempWL}
        />
        <RepCharsSelector 
        repChars={tempRC} 
        setRepChars={setTempRC} />
        <button className='stdBtn' onClick={() => handleBtnClick(true)}>Save changes</button>
        <button className='stdBtn cancelBtn' onClick={() => handleBtnClick(false)}>Cancel</button>
      </div>
    </>
  );
}
