import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

const App: React.FC = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:4000");
      const text = await response.text();
      setInfo(text);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {Boolean(info) ? info : "Loading..."}
        </a>
      </header>
    </div>
  );
};

export default App;
