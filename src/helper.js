import moment from "moment";

export const extractGraphData = (data) => {
    let graphData = { time: [], temp: [] }

    data.forEach(hour => {
        graphData.temp.push(hour.temp)
        graphData.time.push(moment(hour.dt * 1000).format("h a"))
    });

    return graphData
}