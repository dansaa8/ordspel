export default function RepCharsSelector({ settings, setSettings }) {
  const handleRadioButton = (value) => {
    setSettings((settings) => {
      return ({ ...settings, repeatingChars: value });
    });
  };

  return (
    <>
      <section className="repCharsSelector">
        <h3>Repeating letters</h3>
        <div className="form-check">
          <input
            type="radio"
            className="inputRC form-check-input"
            checked={settings.repeatingChars === true}
            onChange={() => handleRadioButton(true)}
          />
          <label htmlFor="repCharsTrue" className="labelRC form-check-label">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            checked={settings.repeatingChars === false}
            onChange={() => handleRadioButton(false)}
            className="inputRC form-check-input"
          />
          <label htmlFor="repCharsTrue" className="labelRC form-check-label">
            No
          </label>
        </div>
      </section>
    </>
  );
}
