'use client';
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
  const { city } = useParams();
  return (
    <h2 className='text-white text-2xl basis-1/2'>{city} is best City.</h2>
  )
}

export default page