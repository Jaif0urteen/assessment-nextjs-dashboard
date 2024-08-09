import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { lineChartData } from '../data/mockData'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart = () => {
  const [fontSize, setFontSize] = useState('medium')

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('dashboard-settings') || '{}')
    if (settings.fontSize) setFontSize(settings.fontSize)
  }, [])

  const data = {
    labels: lineChartData.map(data => data.label),
    datasets: [
      {
        label: 'Sales',
        data: lineChartData.map(data => data.value),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Sales Over the Year',
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

  return <Line data={data} options={options} />
}

export default LineChart
