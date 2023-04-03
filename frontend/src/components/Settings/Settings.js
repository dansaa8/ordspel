import './Settings.css';
import WordLengthSelector from './WordLengthSelector';
import { useState } from 'react';

export default function Settings({ setPhase, wordLength, setWordlength }) {
  //   function handleBtnClick(newPhase) {
  //     setPhase = newPhase;
  //   }

  return (
    <>
        <h1 className="optionsTxt">Options</h1>
      <div className="settingsBox">
        <WordLengthSelector wordLength={wordLength} setWordlength={setWordlength}/>
      </div>
    </>
  );
}
