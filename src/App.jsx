import React, { useState } from "react"
import Header from "components/header";
import Weather from "components/weather";
import { API } from "apiCalls";

import "./sass/main.css"

const App = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const search = async () => {
    // weather call
    await API.getWeather(query)
      .then(response => {
        setLoading(true)
        if (response.ok) return response.json()
        throw response
      })
      .then(data => console.log(data))
      .catch(error => {
        console.error("Error fetching weather: ", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} search={search} />
      {weather === undefined ? <Weather /> : ""}
    </div>
  );
}

export default App;
