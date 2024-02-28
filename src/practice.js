import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const chartData = {
  labels: ['Skill Level'],
  datasets: [
    {
      data: 20, // Replace with your dynamic value
      backgroundColor: ['#007bff'], // Customize color
      hoverBackgroundColor: ['#0062cc'], // Customize hover color
    },
  ],
};

const chartOptions = {
  legend: {
    display: false, // Hide legend as we have only one label
  },
  tooltips: {
    enabled: false, // Disable tooltips as we only have one value
  },
};

const SkillChart = () => {
  // Update dynamicValue state to refresh chart
  const [dynamicValue, setDynamicValue] = React.useState(75); // Example starting value

  const updateValue = () => {
    // Update dynamicValue based on your logic
    setDynamicValue(Math.random() * 100); // Example dynamic update
  };

  return (
    <div>
      <h2>Skill Level</h2>
      <Doughnut data={chartData} options={chartOptions} />
      <button onClick={updateValue}>Update Skill Level</button>
    </div>
  );
};

export default SkillChart;
