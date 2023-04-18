import RepCharsSelector from './RepCharsSelector';
import './Settings.css';
import WordLengthSelector from './WordLengthSelector';
import { useState, useEffect, useMemo } from 'react';

export default function Settings({ setPhase, settings, setSettings }) {
  
  // Sync preselected settings with saved state from App.
  const [tempSettings, setTempSettings] = useState(settings);
  const handleBtnClick = (saveChanges) => {
    if (saveChanges === true) {
      setSettings(tempSettings);
    } else {
      // nothing is saved
    }
    setPhase('entry');
  };

  return (
    <>
      <div className="settingsCtr">
      <h1 className="optionsTxt">Options</h1>
        <WordLengthSelector
          settings={tempSettings}
          setSettings={setTempSettings}
        />
        <RepCharsSelector
          settings={tempSettings}
          setSettings={setTempSettings}
        />
        <button className="stdBtn" onClick={() => handleBtnClick(true)}>
          Save changes
        </button>
        <button
          className="stdBtn cancelBtn"
          onClick={() => handleBtnClick(false)}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
