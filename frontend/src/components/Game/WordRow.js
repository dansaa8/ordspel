import './WordRow.css';
import classNames from "classnames";

export default function WordRow({ wordLength, formId, guesses, lettersOfWords, setLettersOfWords, handleBtnClick }) {

  const currentGuess = guesses.length;
  const renderLetters = (isActive) => {

    const className = classNames({

    })



    const letterInputs = [];
    for (let i = 0; i < wordLength; i++) {
      letterInputs.push(
        <input
          className={`letterInput ${isActive ? 'active' : 'inactive'}`}
          type="text" required
          maxLength={1}
          key={'letter' + i}
          value={lettersOfWords[formId][i]}
          onChange={event => handleInputChange(event, i)}
        ></input>
      );
    }
    return letterInputs;
  }

  const handleInputChange = (ev, i) => {
    const newState = [...lettersOfWords];
    newState[formId][i] = ev.target.value.toUpperCase();
    setLettersOfWords(newState);
  }

  // if (formId < currentGuess) {

  // } 

  if (formId > currentGuess) {
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