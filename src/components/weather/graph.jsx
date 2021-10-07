import React from "react"
import { Line } from "react-chartjs-2"
import { extractGraphData } from "helper"

const Graph = ({ data: hourly }) => {
    const graphData = extractGraphData(hourly)

    const state = {
        labels: graphData.time,
        datasets: [
            {
                label: "Hourly Forecast",
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(255,255,255,0.2)",
                borderColor: "rgba(255,255,255,1)",
                borderWidth: 2,
                data: graphData.temp
            }
        ]
    };

    const options = {
        elements: {
            point: {
                radius: 0
            }
        }
    }

    return (
        <div id="graph">
            {/* <h3>Hourly forecast</h3> */}
            <Line data={state} options={options} />
        </div>
    )
}

export default Graph