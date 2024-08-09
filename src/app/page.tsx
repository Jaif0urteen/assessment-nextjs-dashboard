import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('/assets/welcome-page.jpg')]">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-[500px]">
        <nav>
          <ul>
            <li>
              <Link href="/dashboard" className="text-2xl mb-3 text-white font-bold hover:text-sky-400 transition-colors duration-300">
                Open the Dashboard Click Me..!!!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Home
