"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { FaBuromobelexperte, FaTools } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`bg-gray-800 text-white min-h-screen ${isOpen ? 'w-48' : 'w-16'} transition-width duration-300`}>
            <div className="p-4">
                <button onClick={toggleSidebar} className="focus:outline-none">
                    <FiMenu size={24} />
                </button>
            </div>
            <nav className="mt-8">
                <ul>
                    <li className="px-4 py-2 my-3 hover:bg-gray-700">
                        {
                            isOpen ?
                                <Link href="/dashboard" className='flex '>
                                    <FaChartPie size={25} /> <span className='ms-3'>Dashboard</span>
                                </Link> :
                                <Link href="/dashboard" className='flex '>
                                    <FaChartPie size={25} />
                                </Link>
                        }

                    </li>
                    <li className="px-4 py-2 my-3 hover:bg-gray-700">
                        {isOpen ?
                            <Link href="/settings" className='flex '>
                                <FaTools size={25} />  <span className='ms-3'>Settings</span>
                            </Link> : 
                            <Link href="/settings" className='flex '>
                                <FaTools size={25} />
                            </Link>
                        }

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
