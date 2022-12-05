import { useState } from "react";

function App() {
  const [points, setPoints] = useState([]);

  const clickHandle = (e) => {
    setPoints((points) => [
      ...points,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
  };
  return (
    <div className="screen" onClick={clickHandle}>
      {points.map((point) => (
        <div className="point" style={{ left: point.x, top: point.y }} />
      ))}
    </div>
  );
}

export default App;
