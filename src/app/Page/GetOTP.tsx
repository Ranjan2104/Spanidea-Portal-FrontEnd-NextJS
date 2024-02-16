'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const OTP = dynamic(() => import('../Components/OTP'), {
  loading: () => <h1 className='text-xl'>Loading...</h1>,
})

const GetOTP = () => {
  return (
    <main className='grid place-content-center'>
      <OTP />
    </main>
  )
}

export default GetOTP