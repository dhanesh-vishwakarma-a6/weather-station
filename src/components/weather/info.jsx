import React from "react"
import moment from "moment"
import { compass } from "helper"
// icons
import { MdVisibility, MdSpeed } from "react-icons/md"
import { FaLocationArrow } from "react-icons/fa"
// import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { FiSunrise, FiSunset } from "react-icons/fi"

const Info = ({ data }) => {
    const { main, sys, visibility, wind } = data

    // console.log(data)

    return (
        <div id="info">
            <p>
                <FaLocationArrow className="weather-icon" />
                <span className="keyName">Wind</span> : {(wind.speed).toFixed(1)} m/s {compass(wind.deg)}
            </p>
            <p>
                <MdSpeed className="weather-icon" />
                <span className="keyName">Pressure</span> : {main.pressure} hPa
            </p>
            <p>
                <WiHumidity className="weather-icon" />
                <span className="keyName">Humidity</span> : {main.humidity}%
            </p>
            <p>
                <MdVisibility className="weather-icon" />
                <span className="keyName">Visibility</span> : {(visibility / 1000).toFixed(1)} km
            </p>
            <p>
                <span>
                    <FiSunrise className="weather-icon" />{moment(sys.sunrise * 1000).format("hh:mm a")}
                </span>
                <span>
                    <FiSunset className="weather-icon" />{moment(sys.sunset * 1000).format("hh:mm a")}
                </span>
            </p>
            {/* <p><FaTemperatureHigh className="weather-icon"/> {Math.round(main.temp_max)} <FaTemperatureLow className="weather-icon"/> {Math.round(main.temp_max)}</p> */}
        </div>
    )
}

export default Info