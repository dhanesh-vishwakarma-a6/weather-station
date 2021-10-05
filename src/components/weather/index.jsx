import React from "react"
import Main from "./main"
import Forecast from "./forecast"

const Weather = ({ weather }) => {
    return (
        <div id="weather">
            <Forecast />
            <Main data={weather} />
        </div>
    )
}

export default Weather