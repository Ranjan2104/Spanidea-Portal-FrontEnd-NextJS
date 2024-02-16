'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const HomeComponent = dynamic(() => import('../Components/HomeComponent'), {
  loading: () => <h1 className='text-xl'>Loading...</h1>,
})

const HomePage = () => {
  return (
    <main>
      <HomeComponent />
    </main>
  )
}

export default HomePage