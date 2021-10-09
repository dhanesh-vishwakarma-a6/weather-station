import React from "react"
import Main from "./main"
import Forecast from "./forecast"
import Graph from "./graph"
import Info from "./info"

const Weather = ({ weather, forecast }) => {
    const { daily, hourly } = forecast

    return (
        <>
            <Forecast data={daily} />
            <Main data={weather} />
            <Graph data={hourly} />
            <Info data={weather} />
        </>
    )
}

export default Weather
