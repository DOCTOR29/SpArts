"use client"
import React from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js';



ChartJS.register( CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend); 


const Data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr',],
  datasets: [
    {
          label: 'Fee Recieved',

      data: [100, 233, 333, 256],
      backgroundColor: [
        '#96DED1',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        
      ],
     
      
    },
  ],
};
const Data1 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr',],
  datasets: [
    {
          label: 'Active Students',

      data: [100, 233, 333, 256],
      backgroundColor: [
        '#4169E1',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        
      ],
     
      
    },
  ],
};

// const options = {

//     responsive: true,
//   plugins: {
//     tooltip: {
//       titleFont: {
//         size: 20
//       },
//       bodyFont: {
//         size: 30
//       },
//     },
//     legend: {
//       display: true,
//       responsive: true,
//       position: "bottom",
//       labels: {
//         boxWidth: 36,
//         padding: 40,
//         font: {
//           size: 34
//         },
//       },
//       align: "center",
//     },
//   }
// }


function BarChartRevenue({ toggleData}:{toggleData:boolean}) {
    return (
      <div className='xl:h-[250px] h-[200px]'> {toggleData? <Bar height="250px" width="250px" data={Data} options={{
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align:'center',
            
            labels: {
              padding: 20,
              color: '	#96DED1',
            }
          },
        }
      }} />:<Bar height="250px" width="250px" data={Data1} options={{
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align:'center',
          
            labels: {
              padding: 20,
              color:'#4169E1'
            }
          },
        }
              }} />}
            </div>
  )
}

export default BarChartRevenue