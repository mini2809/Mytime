import { Line } from 'react-chartjs-2';
import './index.scss';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

export function LineGraph(){
    const labels = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 7]
        },]
      };
      const options={
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display: false
            }
        },
        tension: 0.3
      };
    return(
      <Line options={options} data={data}/>
      )
}