import './Settings.css';
import WordLengthSelector from './WordLengthSelector';
import { useState } from 'react';

export default function Settings({ setPhase, setSettings }) {
  //   function handleBtnClick(newPhase) {
  //     setPhase = newPhase;
  //   }

  return (
    <>
      <div className="innerBox settingsBox">
        <h1 className="optionsTxt">Options</h1>
        <WordLengthSelector />
      </div>
    </>
  );
}
