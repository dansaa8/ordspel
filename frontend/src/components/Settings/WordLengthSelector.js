import { useState } from 'react';

export default function WordLengthSelector({ setWordlength, wordLength }) {
  const minLetters = 4;
  const maxLetters = 9;

  const handleChange = (event) => {
    setWordlength(event.target.value);
  };

  const renderRadioButtons = () => {
    const radioButtons = [];
    for (let i = minLetters; i <= maxLetters; i++) {
      radioButtons.push(
        <label for={'WL' + i} className="labelWL dropdown-item">
          {i}
        </label>,
        <input
          type="radio"
          id={'WL' + i}
          name="wordLength"
          className="inputWL"
          value={i}
        ></input>
      );
    }
    return radioButtons;
  };

  return (
    <>
      <section className="wordLengthSelector">
      <h3>Number of letters</h3>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle wordLengthBtn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {wordLength}
          </button>
          <div
            class="dropdown-menu"
            onChange={handleChange}
          >
            <label for="wLengthAll" className="labelWL dropdown-item">
              any
            </label>
            <input
              type="radio"
              id="wLengthAll"
              name="wordLength"
              className="inputWL"
              value="any"
            />
            <>{renderRadioButtons()}</>
          </div>
        </div>
      </section>
    </>
  );
}
