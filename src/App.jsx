import React from "react"
import Header from "components/header";
import Weather from "components/weather";

import "./sass/main.css"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
