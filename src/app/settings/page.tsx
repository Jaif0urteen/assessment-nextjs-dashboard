"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/navigation'


const Settings = () => {
  const [fontSize, setFontSize] = useState('medium')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  
  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem('dashboard-settings', JSON.stringify({ fontSize }))
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
          <div className="mb-4">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Font Size</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={(e) => setFontSize(e.target.value)}
            >
              <option selected>Choose a font</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>

          </div>

          <button
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            onClick={handleSave}
          >
           {loading ? "Loading...." : "Save Settings"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
