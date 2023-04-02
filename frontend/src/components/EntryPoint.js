import './EntryPoint.css';
import { useState } from 'react';

export default function EntryPoint({ setPhase }) {
  function handleBtnClick(newPhase) {
    setPhase(newPhase);
  }
  return (
    <>
      <button
        className="stdBtn settingsBtn"
        onClick={() => handleBtnClick('settings')}
      >
        Settings
      </button>
      <button className="stdBtn mainBtn">Start a new game</button>
    </>
  );
}
