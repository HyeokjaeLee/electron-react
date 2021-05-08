import React, { useState } from "react";
import "./App.css";

function App() {
  const [receiveMessage, setReceiveMessage] = useState(undefined);
  window.api.send("toElectron", "I'm in React");
  window.api.receive("fromElectron", (data) => {
    setReceiveMessage(data);
  });
  return (
    <div className="App">
      <header></header>
      <div className="card">
        <h1>{receiveMessage}</h1>
      </div>
    </div>
  );
}

export default App;
