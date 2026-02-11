'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {

  const pagePath = usePathname();

  return (
    <header className='sticky top-0'>
      <div className='flex justify-between items-center bg-white p-5'>
        <div>
          <Link className='font-bold text-2xl' href={"/"} >🌏 Travel Guide</Link>
        </div>
        <div>
          <ul className='flex justify-center items-center gap-2'>
            <li>
              <Link href={'/'} className={pagePath == '/' ? 'text-pink-700' : ''}>Home</Link>
            </li>
            <li>
              <Link href={'/destinations'} className={pagePath == '/destinations' ? 'text-pink-700' : ''}>Destinations</Link>
            </li>
            <li>
              <Link href={'/contact'} className={pagePath == '/contact' ? 'text-pink-700' : ''}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Nav