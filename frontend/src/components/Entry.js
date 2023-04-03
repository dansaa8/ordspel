import './Entry.css';
import { useState } from 'react';

export default function Entry({ setPhase }) {
  function handleBtnClick(newPhase) {
    setPhase(newPhase);
  }
  return (
    <>
      <>
        <button
          className="stdBtn settingsBtn"
          onClick={() => handleBtnClick('settings')}
        >
          Settings
        </button>
      </>
      <button className="stdBtn mainBtn">Start a new game</button>
    </>
  );
}
