import React from 'react'
import "./globals.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">{children}</div>
      </body>
    </html>
  )
}

export default Layout
