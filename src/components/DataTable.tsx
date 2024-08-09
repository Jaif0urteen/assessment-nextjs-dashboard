import React, { useEffect, useState } from 'react'
import { tableData } from '../data/mockData'

const DataTable = () => {
  const [fontSize, setFontSize] = useState('medium')

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('dashboard-settings') || '{}')
    if (settings.fontSize) setFontSize(settings.fontSize)
  }, [])

  const getFontSizeClass = () => {
    if (fontSize === 'small') return 'text-sm'
    if (fontSize === 'large') return 'text-lg'
    return 'text-base' // medium
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className={`py-2 px-4 border-b border-gray-200 text-cyan-800 ${getFontSizeClass()}`}>ID</th>
            <th className={`py-2 px-4 border-b border-gray-200 text-cyan-800 ${getFontSizeClass()}`}>Name</th>
            <th className={`py-2 px-4 border-b border-gray-200 text-cyan-800 ${getFontSizeClass()}`}>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td className={`py-2 px-4 border-b border-gray-200 text-cyan-500 text-center ${getFontSizeClass()}`}>{row.id}</td>
              <td className={`py-2 px-4 border-b border-gray-200 text-cyan-500 text-center ${getFontSizeClass()}`}>{row.name}</td>
              <td className={`py-2 px-4 border-b border-gray-200 text-cyan-500 text-center ${getFontSizeClass()}`}>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
