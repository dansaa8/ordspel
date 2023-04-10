import './WordRow.css';
export default function WordRow(wordLength, formId) {
  const renderLetters = () => {
    const letters = [];
    for (let i = 0; i < 5; i++) {
      letters.push(
        <input
          className="letterInput"
          type="text"
          maxLength={1}
          key={'letter' + i}
        ></input>
      );
    }
    return letters;
  };

  // if (formId != )
  return (
    <form id={'wordRow' + formId}>
      <fieldset className='wordCtr'>{renderLetters()}</fieldset>
    </form>
  );
}
