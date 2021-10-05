import React, { useState } from "react"
import Header from "components/header";
import Weather from "components/weather";

import "./sass/main.css"

const App = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(false)

  const search = () => {
    console.log(query)
  }

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} search={search} />
      {weather === undefined ? <Weather /> : ""}
    </div>
  );
}

export default App;
