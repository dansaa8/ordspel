import './WordRow.css';

export default function WordRow({
  wordLength,
  formNr,
  guesses,
  lettersOfWords,
  setLettersOfWords,
  handleBtnClick,
}) {
  const currentGuess = guesses.length;

  const renderLetters = (isActive, isEvaluated) => {
    const letterInputs = [];
    for (let i = 0; i < wordLength; i++) {
      letterInputs.push(
        <input
          className={`letterInput ${isActive ? 'active' : 'inactive'} ${
            isEvaluated ? setColor(i) : ''
          } `}
          type="text"
          required
          maxLength={1}
          key={'letter' + i}
          value={lettersOfWords[formNr][i]}
          onChange={(event) => handleInputChange(event, i)}
        ></input>
      );
    }
    return letterInputs;
  };

  function setColor(i) {
    return guesses[formNr].evaluation[i].result;
  }

  const handleInputChange = (ev, i) => {
    const newState = [...lettersOfWords];
    newState[formNr][i] = ev.target.value.toUpperCase();
    setLettersOfWords(newState);
  };

  if (formNr === currentGuess) {
    return (
      <form id={'wordRow' + formNr} onSubmit={handleBtnClick}>
        <fieldset className="wordCtr">{renderLetters(true, false)}</fieldset>
      </form>
    );
  } else if (formNr < currentGuess) {
    return (
      <form id={'wordRow' + formNr}>
        <fieldset className="wordCtr" disabled={true}>
          {renderLetters(false, true)}
        </fieldset>
      </form>
    );
  } else if (formNr > currentGuess) {
    return (
      <form id={'wordRow' + formNr}>
        <fieldset className="wordCtr" disabled={true}>
          {renderLetters(false, false)}
        </fieldset>
      </form>
    );
  }
}
