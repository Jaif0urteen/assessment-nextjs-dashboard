"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/navigation'

const Settings = () => {
  const [fontSize, setFontSize] = useState('medium')
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Retrieve settings from localStorage and update state
    const settings = JSON.parse(localStorage.getItem('dashboard-settings') || '{}')
    if (settings.fontSize) setFontSize(settings.fontSize)
    if (settings.dateFormat) setDateFormat(settings.dateFormat)
  }, [])

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem('dashboard-settings', JSON.stringify({ fontSize, dateFormat }))
      setLoading(false)
      router.push('/dashboard')
    }, 1000)
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Settings</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Font Size Dropdown */}
          <div className="mb-4">
            <label htmlFor="fontSize" className="text-slate-500 hover:text-slate-600 block mb-2 text-md font-semibold">
              Select Font Size
            </label>
            <select
              id="fontSize"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* Date Format Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="dateFormat"
              className="text-slate-500 hover:text-slate-600 block mb-2 text-md font-semibold"
            >
              Select Date Format
            </label>
            <select
              id="dateFormat"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY/MM/DD">YYYY/MM/DD</option>
              <option value="MMMM D, YYYY">MMMM D, YYYY</option>
            </select>
          </div>

          <button
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            onClick={handleSave}
          >
            {loading ? 'Loading....' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
