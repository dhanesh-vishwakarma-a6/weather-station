import React from "react"
import Main from "./main"

const Weather = ({ weather }) => {
    return (
        <div id="weather">
            <Main data={weather} />
        </div>
    )
}

export default Weather