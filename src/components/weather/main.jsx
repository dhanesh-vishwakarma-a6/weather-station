import React from "react"
import moment from "moment"

const Main = ({ data }) => {
    const {
        dt: timeStamp,
        name,
        main,
        sys,
        weather
    } = data

    return (
        <main id="main">
            <section className="location">
                <h2 className="city">{name}, {sys.country}</h2>
                <p className="date">{moment(timeStamp * 1000).format("dddd")}, {moment(timeStamp * 1000).format("MMMM Do YYYY")}</p>
            </section>
            <section className="temperature">
                <p>{weather[0].main}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt="weather-icon"
                />
                <p className="temp">{Math.round(main.temp)}&#8451;</p>
                <p>Feels like {Math.round(main.feels_like)}&#8451;</p>
                <p>{weather[0].description}</p>
            </section>
        </main>
    )
}

export default Main