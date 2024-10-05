import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-slate-800 flex justify-between mt-[5%] items-center px-8 py-3'>
        <Link href="/" className='text-white'>
        <strong>
        CRUD with MongoDB
        </strong>
        </Link>
        <Link href="/add-topic">
        <button className='border rounded-md hover:bg-slate-600 bg-white font-semibold px-1 py-1'>Add Topic</button>
        </Link>
    </nav>
  )
}

export default NavBar
