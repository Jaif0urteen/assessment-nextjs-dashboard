import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { barChartData } from '../data/mockData'

// Registering the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = () => {
  const [fontSize, setFontSize] = useState('medium')

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('dashboard-settings') || '{}')
    if (settings.fontSize) setFontSize(settings.fontSize)
  }, [])

  const data = {
    labels: barChartData.map(data => data.label),
    datasets: [
      {
        label: 'Count',
        data: barChartData.map(data => data.value),
        backgroundColor: 'rgba(75,192,192,0.8)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Bar Chart',
        padding: {
          top: 1,
          bottom: 5,
        },
        font: {
          size: fontSize === 'small' ? 12 : fontSize === 'large' ? 18 : 14,
        },
      },
      legend: {
        labels: {
          font: {
            size: fontSize === 'small' ? 10 : fontSize === 'large' ? 16 : 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: fontSize === 'small' ? 10 : fontSize === 'large' ? 16 : 12,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: fontSize === 'small' ? 10 : fontSize === 'large' ? 16 : 12,
          },
        },
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default BarChart
