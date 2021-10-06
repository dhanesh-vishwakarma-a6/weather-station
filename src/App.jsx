import React, { useState } from "react"
import Header from "components/header";
import Weather from "components/weather";
import { API } from "api";

import "./sass/main.css"

const App = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState()
  const [forecast, setForecast] = useState()
  const [loading, setLoading] = useState(false)

  // current weather
  const currentWeather = async (query) => {
    try {
      setLoading(true)
      let response = await API.getWeather(query)
      if (!response.ok) throw response
      let data = await response.json()
      setWeather(data)
      currentForecast(data.coord.lon, data.coord.lat)
    } catch (error) {
      console.error("Error in fetching current weather: ", error)
    } finally {
      setLoading(false)
    }
  }

  // current forecast
  const currentForecast = async (lon, lat) => {
    try {
      setLoading(true)
      let response = await API.getForecast(lon, lat)
      if (!response.ok) throw response
      let data = await response.json()
      setForecast(data)
    } catch (error) {
      console.error("Error in fetching current forecast: ", error)
    } finally {
      setLoading(false)
    }
  }

  // Search Query
  const search = async () => {
    currentWeather(query)
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} search={search} />
      {weather !== undefined ? <Weather weather={weather} forecast={forecast} /> : ""}
    </div>
  );
}

export default App;
