import React, { useState } from "react"
import Header from "components/header";
import Weather from "components/weather";

import "./sass/main.css"

const App = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(false)

  return (
    <div className="app">
      <Header />
      {weather === undefined ? <Weather /> : ""}
    </div>
  );
}

export default App;
