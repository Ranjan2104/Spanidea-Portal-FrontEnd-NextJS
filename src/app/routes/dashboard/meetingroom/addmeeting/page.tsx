'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const NewMeetingSlot = dynamic(() => import('@/app/Components/NewMeetingSlot'), {
    loading: () => <h1 className='text-xl'>Loading...</h1>,
  })
const page = () => {
  return (
    <div><NewMeetingSlot /></div>
  )
}

export default page