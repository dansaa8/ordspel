import './WordRow.css';
import classNames from "classnames";

export default function WordRow({ wordLength, formNr, guesses, lettersOfWords, setLettersOfWords, handleBtnClick }) {
  console.log('guesses i wordRow: ', guesses);
  const currentGuess = guesses.length;
  const renderLetters = (isActive, isEvaluated) => {
    const letterInputs = [];
    for (let i = 0; i < wordLength; i++) {
      letterInputs.push(
        <input
          className={`letterInput ${isActive ? 'active' : 'inactive'} 
          ${isEvaluated ? {} : ''} `}
          type="text" required
          maxLength={1}
          key={'letter' + i}
          value={lettersOfWords[formNr][i]}
          onChange={event => handleInputChange(event, i)}
        ></input>
      );
    }
    return letterInputs;
  }

  const handleInputChange = (ev, i) => {
    const newState = [...lettersOfWords];
    newState[formNr][i] = ev.target.value.toUpperCase();
    setLettersOfWords(newState);
  }


  if (formNr === currentGuess) {
    return (
      <form id={'wordRow' + formNr} onSubmit={handleBtnClick}>
        <fieldset className="wordCtr">{renderLetters(true, false)}</fieldset>
      </form>
    );
  }

  else if (formNr < currentGuess) {
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