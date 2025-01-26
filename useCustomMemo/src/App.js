import { useState } from "react";
import useCustomMemo from "./hooks/useCustomHook";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  const squared = () => {
    console.log("expensive", count);
    return count * count;
  };
  const memoizedValue = useCustomMemo(squared, [count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <p>{memoizedValue}</p>
      <button onClick={() => setCount2((prev) => prev - 1)}>Decrement</button>
      <p>{count2}</p>
    </div>
  );
}
