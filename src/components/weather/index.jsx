import React from "react"
import Main from "./main"
import Forecast from "./forecast"
import Graph from "./graph"

const Weather = ({ weather, forecast }) => {
    const { daily, hourly } = forecast

    return (
        <div id="weather">
            <Forecast data={daily} />
            <Main data={weather} />
            <Graph data={hourly} />
        </div>
    )
}

export default Weather