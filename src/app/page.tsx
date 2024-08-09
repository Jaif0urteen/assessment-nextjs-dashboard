import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat bg-[url('/assets/welcome-images-for-ppt.jpg')]">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-8">
        <nav>
          <ul>
            <li>
            <Link href="/dashboard">
                <button className="text-base md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8 text-green-500 font-bold hover:text-sky-400 transition-colors duration-300">
                  Open the Dashboard Click Me..!!!
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Home
