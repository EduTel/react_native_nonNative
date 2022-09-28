import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const { 0: native, 1: setNative } = useState("");
  const { 0: nonNative, 1: setNonNative } = useState([]);

  useEffect(() => {
    console.count(`native change ${native}`);
  }, [native]);
  useEffect(() => {
    console.count(`native change ${nonNative}`);
  }, [nonNative]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setNative(1);
        }}
      >
        setNative
      </button>
      <button
        onClick={() => {
          setNonNative([1]);
        }}
      >
        setNative
      </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
