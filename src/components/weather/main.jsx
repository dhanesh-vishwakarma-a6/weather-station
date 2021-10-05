import React from "react"

const Main = () => {
    return (
        <main id="main">
            <section className="location">
                <h2 className="city">London, GB</h2>
                <p className="datetime">Sunday, October 4 2021</p>
            </section>
            <section className="temperature">
                <p>Clouds</p>
                <img
                    src={`https://openweathermap.org/img/wn/09d@2x.png`}
                    alt="weather-icon"
                />
                <p className="temp">-56&#8451;</p>
                <p>Feels like 15&#8451;</p>
            </section>
        </main>
    )
}

export default Main