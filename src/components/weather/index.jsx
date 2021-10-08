import React from "react"
import Main from "./main"
import Forecast from "./forecast"
import Graph from "./graph"

const Weather = ({ weather, forecast }) => {
    const { daily, hourly } = forecast

    return (
        <>
            <Forecast data={daily} />
            <Main data={weather} />
            <Graph data={hourly} />
        </>
    )
}

export default Weather