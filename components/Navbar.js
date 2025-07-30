import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="h-16 bg-black flex items-center justify-between px-10 text-white shadow-md rounded-b-lg font-sans">
      <div className="logo text-2xl font-bold tracking-wide">
        <Link href="/">Shrinkr</Link>
      </div>
      <ul className="flex items-center gap-10 text-lg">
        <li>
          <Link className="hover:text-gray-300 transition-colors duration-200" href="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-gray-300 transition-colors duration-200" href="/about">About</Link>
        </li>
        <li>
          <Link className="hover:text-gray-300 transition-colors duration-200" href="/shorten">Shorten</Link>
        </li>
        <li>
          <Link className="hover:text-gray-300 transition-colors duration-200" href="/contact">Contact Us</Link>
        </li>
        <Link href="/shorten">
          <button className="bg-white text-black px-4 py-2 rounded-md ml-4 hover:bg-gray-200 transition-colors duration-200 font-semibold shadow">
            Try Now
          </button>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar