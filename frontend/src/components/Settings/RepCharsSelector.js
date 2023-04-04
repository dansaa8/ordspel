import { useState } from 'react';

export default function RepCharsSelector({ setRepChars, repChars }) {
  const handleRadioButton = (value) => {
    // setRepChars(event.target.value);
    setRepChars(value);
  };

  return (
    <>
      <section className="repCharsSelector">
        <h3>Repeated letters</h3>
        <div className="form-check">
          <input
            type="radio"
            className="inputRC form-check-input"
            checked={repChars === true}
            onChange={() => handleRadioButton(true)}
            // id="repCharsTrue"
            // name="repChars"
            // value={true}
            // checked={repChars === true}
          />
          <label for="repCharsTrue" className="labelRC form-check-label">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            checked={repChars === false}
            onChange={() => handleRadioButton(false)}
            className="inputRC form-check-input"
            // id="repCharsFalse"
            // name="repChars"
            // value={false}
            // checked={repChars === false}
          />
          <label for="repCharsTrue" className="labelRC form-check-label">
            No
          </label>
        </div>
      </section>
    </>
  );
}
