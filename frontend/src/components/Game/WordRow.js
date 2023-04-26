export default function WordRow({
  formNr,
  guesses,
  lettersOfWords,
  setLettersOfWords,
  handleBtnClick,
  gameState,
}) {
  const currentGuess = guesses.length;
  const wordLength = lettersOfWords[0].length;

  const renderLetters = (isActive, isEvaluated) => {
    const letterInputs = [];
    for (let i = 0; i < wordLength; i++) {
      letterInputs.push(
        <input
          className={`letterInput ${isActive ? 'active' : 'inactive'} ${isEvaluated ? setColor(i) : ''
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

  if (formNr === currentGuess && gameState === 'won') {
    return (
      <form id={'wordRow' + formNr} className="wordRow" onSubmit={handleBtnClick}>
        <fieldset className="wordCtr">{renderLetters(false, false)}</fieldset>
      </form>
    );
  }
  else if (formNr === currentGuess) {
    return (
      <form id={'wordRow' + formNr} className="wordRow" onSubmit={handleBtnClick}>
        <fieldset className="wordCtr">{renderLetters(true, false)}</fieldset>
      </form>
    );
  } else if (formNr < currentGuess) {
    return (
      <form id={'wordRow' + formNr} className="wordRow">
        <fieldset className="wordCtr" disabled={true}>
          {renderLetters(false, true)}
        </fieldset>
      </form>
    );
  } else if (formNr > currentGuess) {
    return (
      <form id={'wordRow' + formNr} className="wordRow">
        <fieldset className="wordCtr" disabled={true}>
          {renderLetters(false, false)}
        </fieldset>
      </form>
    );
  }
}
