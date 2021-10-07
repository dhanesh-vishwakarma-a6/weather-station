// 
const base = process.env.REACT_APP_API_BASE;
const key = process.env.REACT_APP_API_KEY;

export const API = {
    // current weather
    getWeather: (query, units = "metric") => {
        return fetch(`${base}weather?q=${query}&units=${units}&appid=${key}`)
    },

    // forecast
    getForecast: (lon, lat, units = "metric", part = "current,minutely,alerts") => {
        return fetch(`${base}onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=${units}&appid=${key}`)
    }
}
