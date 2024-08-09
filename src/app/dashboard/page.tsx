"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '../../components/Sidebar'
import Loader from '@/components/Loader'

const LineChart = dynamic(() => import('../../components/LineChart'), { ssr: false,  loading: () => <Loader />, })
const BarChart = dynamic(() => import('../../components/BarChart'), { ssr: false,  loading: () => <Loader />, })
const DataTable = dynamic(() => import('../../components/DataTable'), { ssr: false,  loading: () => <Loader />, })

const Dashboard = () => {
  const [fontSize, setFontSize] = useState('medium')

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('dashboard-settings') || '{}')
    if (settings.fontSize) setFontSize(settings.fontSize)
  }, [])

  // Define font sizes
  const getFontSize = () => {
    switch (fontSize) {
      case 'small':
        return 'text-sm'
      case 'large':
        return 'text-xl'
      default:
        return 'text-lg'
    }
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 space-y-4 flex-1 ">
        <h1 className={`text-2xl font-bold text-blue-600 dark:text-sky-400 ${getFontSize()}`}>Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className={`bg-white p-4 rounded shadow ${getFontSize()}`}>
            <h2 className={`font-extrabold ${getFontSize()} text-green-500`}>
              Line Chart
            </h2>
            <LineChart />
          </div>
          <div className={`bg-white p-4 rounded shadow ${getFontSize()}`}>
            <h2 className={`font-extrabold ${getFontSize()} text-green-500`}>Bar Chart</h2>
            <BarChart />
          </div>
          <div className={`bg-white p-4 rounded shadow col-span-1 md:col-span-2 ${getFontSize()}`}>
            <h2 className={`font-extrabold ${getFontSize()} text-green-500 mb-4`}>Data Table</h2>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
