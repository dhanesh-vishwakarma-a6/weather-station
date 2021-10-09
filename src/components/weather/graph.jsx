import React from "react"
import { Line } from "react-chartjs-2"
import { extractGraphData } from "helper"

const Graph = ({ data: hourly }) => {
    const graphData = extractGraphData(hourly)

    const state = {
        labels: graphData.time,
        datasets: [
            {
                label: "Hourly Forecast (48 hrs)",
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
        maintainAspectRatio: false,
        responsive: true,
        animation: {
            duration: 1000
        },

        elements: {
            point: {
                radius: 0
            }
        }
    }

    return (
        <div id="graph">
            <Line data={state} options={options} />
        </div>
    )
}

export default Graph