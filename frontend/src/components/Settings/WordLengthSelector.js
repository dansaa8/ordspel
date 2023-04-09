import { useState } from 'react';
import './WordLengthSelector.css';

export default function WordLengthSelector({ settings, setSettings }) {
  const minLetters = 4;
  const maxLetters = 9;

  const handleChange = (event) => {
    setSettings((settings) => {
      return { ...settings, wordLength: event.target.value };
    });
  };

  const renderRadioButtons = () => {
    const radioButtons = [];
    for (let i = minLetters - 1; i <= maxLetters; i++) {
      let lengthVal = i;
      if (i < minLetters) lengthVal = 'any';
      radioButtons.push(
        <label key={`label${i}`} htmlFor={'WL' + lengthVal} className="labelWL dropdown-item">
          {lengthVal}
        </label>,
        <input
          key={`input${i}`}
          type="radio"
          id={'WL' + lengthVal}
          name="wordLength"
          className="inputWL"
          value={lengthVal}
        ></input>
      );
    }
    return radioButtons;
  };

  return (
    <>
      <section className="wordLengthSelector">
        <h3>Number of letters</h3>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle wordLengthBtn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {settings.wordLength}
          </button>
          <div className="dropdown-menu" onChange={handleChange}>
            {renderRadioButtons()}
          </div>
        </div>
      </section>
    </>
  );
}
