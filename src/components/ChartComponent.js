import Chart from "chart.js/auto";
import React from "react";
import { Bar } from "react-chartjs-2";

function ChartComponent({
  data,
  labels,
  dataLabel,
  backgroundColor,
  borderColor,
  displayLegend,
}) {
  Chart.defaults.color = "black";

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: dataLabel,
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
        hoverBorderWidth: 1.5,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: displayLegend,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: true,
          drawOnChartArea: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: true,
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default ChartComponent;
