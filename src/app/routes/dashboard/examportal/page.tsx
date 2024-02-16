'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const ExamPortal = dynamic(() => import('@/app/Page/ExamPortal'), {
  loading: () => <h1 className='text-xl'>Loading...</h1>,
})

const page = () => {
  return (
    <div><ExamPortal /></div>
  )
}

export default page