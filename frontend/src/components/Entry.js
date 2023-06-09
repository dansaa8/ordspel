export default function Entry({ setPhase }) {
  function handleBtnClick(newPhase) {
    setPhase(newPhase);
  }
  return (
    <>
      <h1 className="header">Play Wordle</h1>

      <div className="stdCtr entry">
        <button
          className="settingsBtn stdBtn "
          onClick={() => handleBtnClick('settings')}
        >
          Settings
        </button>
        <button
          className="startBtn stdBtn"
          onClick={() => handleBtnClick('generateGame')}
        >
          Start a new game
        </button>
      </div>
    </>
  );
}
