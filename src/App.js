import React, { Component, useState } from "react";
import "./App.css";

function App() {
  const receiveMessage = window.communication.receive();
  window.communication.send("send Message");

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
