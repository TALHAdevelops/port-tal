"use client"
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState (false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
      <nav className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center border-2 border-red-400'>
  <h1 className='text-3xl font-bold primary-color ml-4'>M.Talha</h1>
  <ul className='hidden md:flex'>
  <li className='p-5 hover:text-red-500'>
    <Link href="/">Home</Link>
  </li>
    <li className='p-5 hover:text-red-500'>
      <Link href="/about">About</Link>
    </li>
    <li className='p-5 hover:text-red-500'>
      <Link href="/skills">Skills</Link>
    </li>
    <li className='p-5 hover:text-red-500'>
      <Link href="/projects">Projects</Link>
    </li>
    <li className='p-5 hover:text-red-500'>
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
 {/* Mobile Navigation Menu */}
 <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer ">
        {nav ? <AiOutlineClose size={24} className='text-black' /> : <AiOutlineMenu size={24} className='text-white' />}
      </div>
<div className={`${nav ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-white text-[--main-color] transition-transform duration-500 ease-in-out z-40`}>
  <h1 className="text-4xl text-lime-300 primary-color m-4">M.Talha</h1>
  <ul className="p-8 text-xl">
    <li onClick={handleNav} className="p-4 hover:text-red-500 hover:font-bold hover:underline">
      <Link href="/">Home</Link>
    </li>
    <li onClick={handleNav} className="p-4 hover:text-red-500 hover:font-bold hover:underline">
      <Link href="/about">About</Link>
    </li>
    <li onClick={handleNav} className="p-4 hover:text-red-500 hover:font-bold hover:underline">
      <Link href="/skills">Skills</Link>
    </li>
    <li onClick={handleNav} className="p-4 hover:text-red-500 hover:font-bold hover:underline">
      <Link href="/projects">Projects</Link>
    </li>
    <li onClick={handleNav} className="p-4 hover:text-red-500 hover:font-bold hover:underline">
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
</div>

      </nav>
    
  )
}

export default Navbar;