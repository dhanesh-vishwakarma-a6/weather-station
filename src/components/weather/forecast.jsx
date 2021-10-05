import React from "react"

const Forecast = () => {
    return (
        <div id="forecast">
            <article className="weather-card">
                <section className="date">Mon, Oct 5</section>
                <section className="weather-icon">
                    <img
                        src={`https://openweathermap.org/img/wn/09d.png`}
                        alt="weather-icon"
                    />
                </section>
                <section className="temp-minmax">17/10 C</section>
                <section className="description">moderate rain</section>
            </article>

        </div>
    )
}

export default Forecast