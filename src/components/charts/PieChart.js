import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Luna', 'Tether', 'Ethereum'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <div className="piechart w-96 bg-white rounded-lg p-2">
  <span className='font-bold'>Portfolio</span>
  <span></span>
  <Pie data={data} />
  </div> ;
}
