'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

function page() {
  const router = useRouter();
  const countries = ['London', 'Paris', 'NewYork'];
  return (
    <div className='flex justify-center items-center flex-col gap-2.5 h-screen'>
      {
        countries.map((country, i) => (
          <button className='text-black bg-white text-2xl font-bold p-5 rounded w-52' key={i} onClick={() => router.push(`/destinations/${country}`)}> {country} </button>
        ))
      }
    </div>
  )
}

export default page