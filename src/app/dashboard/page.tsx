"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar'
import Loader from '@/components/Loader'
import moment from 'moment'

const LineChart = dynamic(() => import('@/components/LineChart'), { ssr: false, loading: () => <Loader />, })
const BarChart = dynamic(() => import('@/components/BarChart'), { ssr: false, loading: () => <Loader />, })
const DataTable = dynamic(() => import('@/components/DataTable'), { ssr: false, loading: () => <Loader />, })

const Dashboard = () => {
  const [fontSize, setFontSize] = useState('medium')
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY') // Default format for moment.js
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('dashboard-settings') || '{}')
    if (settings.fontSize) setFontSize(settings.fontSize)
    if (settings.dateFormat) setDateFormat(settings.dateFormat)
  }, [])

  // Correctly format the current date using moment.js
  const formattedDate = moment(currentDate).format(dateFormat)

  // Set font size based on selected setting
  const h1FontSize = fontSize === 'small' ? 'text-xl' : fontSize === 'large' ? 'text-4xl' : 'text-2xl'
  const h2FontSize = fontSize === 'small' ? 'text-lg' : fontSize === 'large' ? 'text-3xl' : 'text-xl'

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 space-y-4 flex-1">
        <h1 className={`${h1FontSize} font-bold text-blue-600 dark:text-sky-400`}>Dashboard</h1>

        {/* Display current date formatted as per user selection */}
        <div className="mb-4">
          <h2 className={`${h2FontSize} font-semibold text-gray-700`}>Today's Date: {formattedDate}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow ">
            <h2 className={`${h2FontSize} text-green-500 font-extrabold`}>
              Line Chart
            </h2>
            <LineChart />
          </div>
          <div className="bg-white p-4 rounded shadow ">
            <h2 className={`${h2FontSize} text-green-500 font-extrabold`}>Bar Chart</h2>
            <BarChart />
          </div>
          <div className="bg-white p-4 rounded shadow col-span-1 md:col-span-2">
            <h2 className={`${h2FontSize} text-green-500 font-extrabold mb-4`}>Data Table</h2>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
