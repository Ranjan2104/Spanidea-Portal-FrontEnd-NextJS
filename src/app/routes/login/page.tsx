'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const Login = dynamic(() => import('@/app/Components/Login'), {
  loading: () => <h1 className='text-xl'>Loading...</h1>,
})

const page = () => {
  return (
    <div><Login /></div>
  )
}

export default page