import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const start = () => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    ref.current = intervalId;
  };

  const pause = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };
  const reset = () => {
    setCount(0);
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
