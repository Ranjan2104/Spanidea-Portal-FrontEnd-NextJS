'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const HrmsPortal = dynamic(() => import('@/app/Page/HrmsPortal'), {
  loading: () => <h1 className='text-xl'>Loading...</h1>,
})

const page = () => {
  return (
    <div><HrmsPortal /></div>
  )
}

export default page