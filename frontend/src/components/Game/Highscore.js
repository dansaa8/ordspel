import './Highscore.css';
export default function Highscore({result, guesses}) {
    const duration = (new Date(result.endTime) - new Date(result.startTime)) / 1000;
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Congrats you won the game</h1>
        {/* <p>The correct word was {guesses.at(-1)}</p>
        <p>Guesses: {guesses.length}</p>
        <p>Duration: {duration}s</p>
        <h2></h2> */}
      </div>
    </div>
  );
}
