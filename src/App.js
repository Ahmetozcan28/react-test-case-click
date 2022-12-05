import { useState } from "react";

function App() {
  const [points, setPoints] = useState([]);
  const [data, setData] = useState([]);
  const clickHandle = (e) => {
    setPoints((points) => [
      ...points,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
    setData([]);
  };
  const undoHandle = (e) => {
    e.stopPropagation();
    const data = [...points];
    const item = data.pop();
    setData((data) => [...data, item]);
    setPoints(data);
  };
  const redoHandle = (e) => {
    e.stopPropagation();
    const d = [...data];
    const item = d.pop();
    setPoints((points) => [...points, item]);
    setData(d);
  };
  return (
    <>
      <div className="screen" onClick={clickHandle}>
        <header className="header">
          <button disabled={points.length === 0} onClick={undoHandle}>
            Geri Al
          </button>
          <button disabled={data.length === 0} onClick={redoHandle}>
            İleri Al
          </button>
        </header>
        {points.map((point) => (
          <div
            className=" point material-symbols-outlined"
            style={{ color: "yellow",   left: point.x, top: point.y }}
          >
            electric_bolt
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
