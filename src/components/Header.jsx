const Header = (props) => {
  const { interval, updateInterval, startGame, pauseGame, resetGame } = props;
  return (
    <div className="my-2">
      <button onClick={startGame} className="btn btn-success mx-2">
        Start
      </button>
      <button onClick={pauseGame} className="btn btn-secondary mx-2">
        Pause
      </button>
      <button onClick={resetGame} className="btn btn-primary mx-2">
        Reset
      </button>
      <input
        type="numeric"
        min="1"
        max="10"
        value={interval}
        placeholder="Enter the interval"
        onChange={(e) => updateInterval(e)}
      ></input>
    </div>
  );
};

export default Header;
