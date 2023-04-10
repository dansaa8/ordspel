import './WordRow.css';
export default function WordRow({ wordLength, formId, guessNr }) {

  const renderLetters = (isActive) => {
    const letters = [];
    for (let i = 0; i < wordLength; i++) {
      letters.push(
        <input
          className={`letterInput ${isActive ? 'active' : 'inactive'}`}
          type="text" required
          maxLength={1}
          key={'letter' + i}
        ></input>
      );
    }
    return letters;
  };

  if (formId !== guessNr) {
    return (
      <form id={'wordRow' + formId}>
        <fieldset className="wordCtr" disabled={true}>
          {renderLetters(false)}
        </fieldset>
      </form>
    );
  } else {
    return (
      <form id={'wordRow' + formId}>
        <fieldset className="wordCtr">{renderLetters(true)}</fieldset>
      </form>
    );
  }
}
