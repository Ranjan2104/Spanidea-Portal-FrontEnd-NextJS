'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const MeetingRoom = dynamic(() => import('@/app/Page/MeetingRoom'), {
  loading: () => <h1 className='text-xl'>Loading...</h1>,
})

const page = () => {
  return (
    <div><MeetingRoom /></div>
  )
}

export default page