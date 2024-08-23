
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  BarController,
  Tooltip,
  Legend 
} from 'chart.js';

// Register the components needed for the chart
Chartjs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    BarController,
    Tooltip,
    Legend 
);

const Chart2 = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Sales',
      data: [550, 450, 300, 800, 550, 450, 300, 450, 550, 600, 750, 900],
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      barPercentage: 0.8
    }],
  };

  const options = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      bar: {
        fill: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(229, 231, 235, 0.8)',
          maxRotation: 0,
          autoSkip: false,
        },
        border: {
          display: false,
        },   
        grid: {
            display: false,
        }
      },
      y: {
        min: 0, 
        max: 1000,
        beginAtZero: true,
        border: {
          dash: [2, 2],
          display: false,
        },   
        grid: {
          color: 'rgba(229, 231, 235, 0.3)',
          tickBorderDash: [0, 2],
        },
        ticks: {
          color: 'rgba(229, 231, 235, 0.8)',
          align: 'end',
          stepSize: 100, 
          callback: function(value) {
            // Hide the tick label at 1000
            return value === 1000 ? '' : value;
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default Chart2;