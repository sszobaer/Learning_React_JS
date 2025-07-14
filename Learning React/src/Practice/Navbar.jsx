import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-800 p-4 mb-5">
        <h1 className="text-2xl text-white font-bold">React Practice</h1>
        <input type="search" name="" id="" />
        <nav className="space-x-4">
          <Link to = "/" className="text-white hover:text-gray-300">Use State Hook</Link>
          <Link to = "/form" className="text-white hover:text-gray-300">Form Handling</Link>
          <Link to = "/card" className="text-white hover:text-gray-300">Card Management</Link>
          <Link to = "/api" className="text-white hover:text-gray-300">API Data</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
