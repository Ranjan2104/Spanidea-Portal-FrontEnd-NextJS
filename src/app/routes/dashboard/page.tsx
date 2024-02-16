'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const Dashboard = dynamic(() => import('@/app/Page/Dashboard'), {
  loading: () => <h1 className='text-xl'>Loading...</h1>,
})

const page = () => {
  return (
    <div><Dashboard /></div>
  )
}

export default page