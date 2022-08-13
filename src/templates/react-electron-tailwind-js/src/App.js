import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Links from "./components/Links";

function App() {
  const [appName, setAppName] = useState("");

  useEffect(() => {
    setAppName(window.electronAPI.getAppDetails());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src</code> to work with react.
        </p>
        <p>
          Edit <code>public/electron</code> to work electron.
        </p>
        <p>
          Backend is up and running at http://localhost:5001 and it shows{" "}
          <code>{appName}</code>
        </p>
        <Links color="blue" title="Learn React" link="https://reactjs.org" />
        <Links
          color="purple"
          title="Learn Electron"
          link="https://www.electronjs.org"
        />
        <Links
          color="pink"
          title="Learn Tailwindcss"
          link="https://tailwindcss.com/docs"
        />
        <button
          onClick={() => fetch("http://localhost:5001/close-app")}
          className="bg-gray-500 p-2 m-1 rounded"
        >
          Close App
        </button>
      </header>
    </div>
  );
}

export default App;
