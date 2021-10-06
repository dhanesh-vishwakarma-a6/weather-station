import React from "react"
import Main from "./main"
import Forecast from "./forecast"

const Weather = ({ weather, forecast }) => {
    return (
        <div id="weather">
            <Forecast data={forecast} />
            <Main data={weather} />
        </div>
    )
}

export default Weather