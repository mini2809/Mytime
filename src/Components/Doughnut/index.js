import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export function DoughnutChart(){
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data={
        labels:[
            'Kathy',
            'Jeff',
            'John',
            'Amilia',
            'Others'
        ],
        datasets:[{
            data: [300, 50, 100 ,498,38],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(190, 129, 160)',
            'rgb(255, 246, 135)'
            ],
            hoverOffset: 4
        }]

    }
    return(
        <div>
            <Doughnut data={data} />
        </div>
    )
}