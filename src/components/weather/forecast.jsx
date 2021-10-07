import React from "react"
import moment from "moment"

const Forecast = ({ data: daily }) => {
    return (
        <div id="forecast">
            <h3>8-day forecast</h3>
            {daily.map((day, index) => {
                const { dt, temp, weather } = day
                return (
                    <article key={index} className="weather-card">
                        {/* date */}
                        <section className="date">
                            <span >{moment(dt * 1000).format("ddd")}, {moment(dt * 1000).format("MMM Do")}</span>
                        </section>

                        {/* weather */}
                        <section className="weather-info">
                            <span className="weather-icon">
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
                                    alt="weather-icon"
                                />
                            </span>
                            <span className="temp-maxmin">{Math.round(temp.max)}/{Math.round(temp.min)}&#8451;</span>
                            <span className="description">{weather[0].description}</span>
                        </section>
                    </article>
                )
            })}
        </div>
    )
}

export default Forecast