import { useEffect, useState } from "react";

const PlayArea = (props) => {
  const { gameStage, interval, clickEvent, setErrorMessage } = props;
  const cell = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activeRow, setActiveRow] = useState(null);
  const [activeCol, setActiveCol] = useState(null);

  useEffect(() => {
    if (gameStage == "start") {
      getRandomCell();
    } else {
      setActiveCol(null);
      setActiveRow(null);
    }
  }, [gameStage]);

  const getRandomCell = () => {
    setActiveRow(Math.floor(Math.random() * cell.length));
    setActiveCol(Math.floor(Math.random() * cell.length));
  };

  const setClickedCell = (indexRow, indexColumn) => {
    if (gameStage == "start") {
      if (activeRow == indexRow && activeCol == indexColumn) {
        clickEvent();
        getRandomCell();
        setErrorMessage(null);
      } else setErrorMessage("Clicked wrong cell");
    } else setErrorMessage("Game not started");
  };

  return (
    <div>
      {cell.map((row, indexRow) => (
        <div key={"row ".indexRow} className="row">
          {cell.map((column, indexColumn) => (
            <div
              key={"column ".indexColumn}
              onClick={() => setClickedCell(indexRow, indexColumn)}
              className={
                "col-1 border border-1 m-1 p-3 cursor-pointer  " +
                (indexRow === activeRow && indexColumn == activeCol
                  ? "bg-danger"
                  : "")
              }
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayArea;
