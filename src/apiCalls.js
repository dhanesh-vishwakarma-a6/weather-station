// 
const base = process.env.REACT_APP_API_BASE;
const key = process.env.REACT_APP_API_KEY;

export const API = {
    getWeather: (query, units = "metric") => {
        return fetch(`${base}weather?q=${query}&units=${units}&APPID=${key}`)
    }
}
