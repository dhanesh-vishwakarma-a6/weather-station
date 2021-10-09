import React, { lazy, Suspense, useState } from "react"
import Loader from "components/loader"
import Header from "components/header";
import { API } from "api";
import "./sass/main.css"

const Weather = lazy(() => import("components/weather"))

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
      const { lon, lat } = data.coord
      await currentForecast(lon, lat)
      setWeather(data)
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

  // if (loading) return <Loader />

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} search={search} />
      {loading ? (
        <Loader />
      ) : (
        // Weather components
        weather && forecast !== undefined ? (
          <Suspense fallback={<Loader />}>
            <Weather weather={weather} forecast={forecast} />
          </Suspense>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default App;
