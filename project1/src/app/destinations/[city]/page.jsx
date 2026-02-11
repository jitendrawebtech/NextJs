'use client'
import { useParams } from 'next/navigation';
import React from 'react'
import london from '@/assets/london.jpg'
import paris from '@/assets/paris.jpg'
import newyork from '@/assets/newyork.jpg'
import Image from 'next/image';

function page({ params }) {
  const { city } = useParams();
  return (
    <div className='text-white text-2xl basis-1/2'>
      <h2>{city} city page</h2>
      <div>
        {
          city == 'London' ? <Image width={400} height={350} src={london} alt='london' /> :
            city == 'Paris' ? <Image width={400} height={350} src={paris} alt='paris' /> :
              city == 'NewYork' && <Image width={400} height={350} src={newyork} alt='newyork' />
        }
      </div>
    </div>
  )
}

export default page