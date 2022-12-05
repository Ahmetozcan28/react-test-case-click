import { useState } from "react";

function App() {
  const [points, setPoints] = useState([]);
  const [data , setData] = useState([]);
  console.log(points);
  const clickHandle = (e) => {
    setPoints((points) => [
      ...points,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
    setData([])
  };
  const redoHandle = (e) => {
    e.stopPropagation()
    const data = [...points]
    const item = data.pop()
    setData(data => [...data, item])
    setPoints(data)
  };
  const undoHandle = (e) => {
    e.stopPropagation()
    const d = [...data]
    const item = d.pop()
    setPoints(points => [...points, item])
    setData(d)

  }
  return (
    <>
      <div className="screen" onClick={clickHandle}>
        <header className="header">
          <button disabled={points.length === 0} onClick={redoHandle}>Geri Al</button>
          <button disabled={data.length === 0} onClick={undoHandle} >İleri Al</button>
        </header>
        {points.map((point) => (
          <div className="point" style={{ left: point.x, top: point.y }} />
        ))}
      </div>
    </>
  );
}

export default App;
