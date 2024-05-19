import React from 'react'
import { Link } from 'react-router-dom';

function MainLayout({ children }) {

  // call api refresh token
  return (
    <div className='flex'>
      <aside className="relative bg-[#3d68ff] w-64 shrink-0 hidden sm:block shadow-xl">
        <div className="p-6">
          <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
        </div>
        <nav className="flex flex-col text-white text-base font-semibold pt-3">
          <Link to="/"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            Introduction JSX
          </Link>
          <Link to="/props" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Props</Link>
          <Link to="/state" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">State</Link>
          <Link to="/user" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">User</Link>
          <Link to="/components" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Components</Link>
          <Link to="/book" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Book</Link>
          <Link to="/form" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Form</Link>
        </nav>
      </aside>
      <div className='flex flex-col w-full'>
        <header className='w-full h-[64px] flex items-center px-2 border-solid border-b-[1px] border-[#e5e7eb]'>
          <div className='flex justify-end w-full'>
            <Link to='/signin' className='text-lg font-semibold text-[#3d68ff]'>Logout</Link>
          </div>
        </header>

        <main className='w-full flex-grow p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout