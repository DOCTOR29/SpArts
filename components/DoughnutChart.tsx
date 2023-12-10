"use client"
import React from 'react'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';



ChartJS.register(ArcElement, Tooltip, Legend); 


const Data = {
  labels: ['AMOUNT RECIEVED', 'AMOUNT PENDING'],
  datasets: [
    {
      label: '₹',

      data: [12, 19],
      backgroundColor: [
        '#4169E1',
        '	#96DED1',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0,
      cutout:'40%'
    },
  ],
};
const options = {
  plugins: {
    tooltip: {
      titleFont: {
        size: 20
      },
      bodyFont: {
        size: 30
      },
    },
    scales: {
      
    },
    legend: {
      display: true,
      responsive: true,
      position: "bottom",
      labels: {
       color:'#96DED1', 
        boxWidth: 36,
        padding: 40,
        font: {
          size: 34
        },
      },
      align: "center",
    },
  }
}


function DoughnutChart() {
  return (
    <Doughnut height="250px" width="250px" data={Data} options={{
      maintainAspectRatio: false,
      animation: {
        
        animateRotate: true
    },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          align:'center',
          maxWidth: 100,
          labels: {
            padding: 20,
            
          }
        },
        
        
      
        

      }
    }} />
  )
}

export default DoughnutChart