
import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as Chartjs,
  LineElement,
  PointElement, // Corrected typo
  CategoryScale,
  LinearScale,
  LineController,
  Tooltip,
  Legend 
} from 'chart.js';

// Register the components needed for the chart
Chartjs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  LineController,
  Tooltip,
  Legend 
);

const Chart1 = () => {
  const chartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'Sales',
      data: [12, 18, 8, 18, 22, 19, 39],
      
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
      line: {
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        fill: false,
        tension: 0,
      },
      point: {
        radius: 5,
        backgroundColor: 'rgba(255, 255, 255,0.8)', // Ensure this property is correctly placed
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(229, 231, 235, 0.8)',
          align: 'start',
        },
        border: {
          dash: [2, 2],
          display: false,
        },   
        grid: {
          color: 'rgba(229, 231, 235, 0.3)',
          tickBorderDash: [0, 2],
        }
      },
      y: {
        min: 0, 
        max: 50, 
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
          stepSize: 10,
          callback: function(value) {
            // Hide the tick label at 1000
            return value === 50 ? '' : value;
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart1;
