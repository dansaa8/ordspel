import './WordRow.css';
export default function WordRow({ wordLength, formId, guessNr, guessVerification, inputWords, setInputWords, handleBtnClick }) {

  const renderLetters = (isActive) => {
    const letters = [];
    for (let i = 0; i < wordLength; i++) {
      letters.push(
        <input
          className={`letterInput ${isActive ? 'active' : 'inactive'}`}
          type="text" required
          maxLength={1}
          key={'letter' + i}
          value={inputWords[formId][i]}
          onChange={event => handleInputChange(event, i)}
        ></input>
      );
    }
    return letters;
  };

  const handleInputChange = (ev, i) => {
    const newState = [...inputWords];
    newState[formId][i] = ev.target.value;
    setInputWords(newState);
  }

  if (formId < guessNr) {

  }

  if (formId > guessNr) {
    return (
      <form id={'wordRow' + formId}>
        <fieldset className="wordCtr" disabled={true}>
          {renderLetters(false)}
        </fieldset>
      </form>
    );
  } else {
    return (
      <form id={'wordRow' + formId} onSubmit={handleBtnClick}>
        <fieldset className="wordCtr">{renderLetters(true)}</fieldset>
      </form>
    );
  }
}
