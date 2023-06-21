import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Calculate the distribution of people in different occupations
  const occupations = {};

  data.forEach((person) => {
    const occupation = person.Occupation;
    if (occupations.hasOwnProperty(occupation)) {
      occupations[occupation]++;
    } else {
      occupations[occupation] = 1;
    }
  });

  // Prepare data for the pie chart
  const labels = Object.keys(occupations);
  const values = Object.values(occupations);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#66BB6A",
          "#FF8A65",
          "#9575CD",
          "#4DD0E1",
        ],
      },
    ],
  };

  // Render the pie chart
  return (
    <div className="pie-chart-container">
      <h2>Pie Chart</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
