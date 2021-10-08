import React from 'react'
import moment from 'moment'
import { MdVisibility } from "react-icons/md"
import { FaLocationArrow, FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { FiSunrise, FiSunset } from "react-icons/fi"

const Details = ({ data }) => {
    const { main, sys, visibility, weather, wind } = data
    console.log(data)

    return (
        <div id="details">

        </div>
    )
}

export default Details