import moment from "moment";

export const extractGraphData = (data) => {
    let graphData = { time: [], temp: [] }

    data.forEach(hour => {
        graphData.temp.push(hour.temp)
        graphData.time.push(moment(hour.dt * 1000).format("h a"))
    });

    return graphData
}

export const compass = (deg) => {
    var val = Math.floor(deg / 22.5 + 0.5);
    var arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW"
    ];
    return arr[val % 16];
};
