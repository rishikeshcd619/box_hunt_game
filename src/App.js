import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlayArea from "./components/PlayArea";
import Results from "./components/Results";

function App() {
  const [interval, setInterval] = useState(0);
  const [gameStage, setGameStage] = useState("Not start");
  const [result, setResult] = useState([]);
  const [timer, setTimer] = useState(0);
  const [inactiveTimer, setInactiveTimer] = useState(0);
  const [relaxationTIme, setRelationTime] = useState(0);
  const [errorMessage, setMessage] = useState(null);

  const updateInterval = (event) => {
    setInterval(event.target.value);
  };

  const startGame = () => {
    if (gameStage == "pause") {
      const resumedTime = new Date();
      setRelationTime((resumedTime.getTime() - inactiveTimer) / 1000);
      setInactiveTimer(0);
      setGameStage("start");
    } else {
      setGameStage("start");
      const date = new Date();
      setTimer(date.getTime());
    }
  };

  const pauseGame = () => {
    setGameStage("pause");
    const date = new Date();
    setInactiveTimer(date.getTime());
  };

  const resetGame = () => {
    setGameStage("reset");
    const date = new Date();
    setTimer(date.getTime());
    setResult([]);
    setInterval(0);
    setInactiveTimer(0);
    setErrorMessage(null);
  };

  const setErrorMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const clickEvent = () => {
    if (result.length > 0 && timer) {
      const date = new Date();
      setResult((result) => [
        ...result,
        (date.getTime() - timer) / 1000 + interval - relaxationTIme,
      ]);
    } else if (timer) {
      const date = new Date();

      setResult((result) => [
        ...result,
        (date.getTime() - timer) / 1000 + interval,
      ]);
    } else setErrorMessage("Please start the Game");
  };

  return (
    <div className="container">
      <div className="text-center">
        <Header
          interval={interval}
          updateInterval={updateInterval}
          startGame={startGame}
          pauseGame={pauseGame}
          resetGame={resetGame}
        />
        <h6>Game Status: {gameStage}ed</h6>
        {errorMessage ? <div className="text-danger">{errorMessage}</div> : ""}
        <PlayArea
          gameStage={gameStage}
          interval={interval}
          clickEvent={clickEvent}
          setErrorMessage={setErrorMessage}
        />
        <Results result={result} />
      </div>
    </div>
  );
}

export default App;
