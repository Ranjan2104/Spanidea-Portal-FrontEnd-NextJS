'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const MeetingTab = dynamic(() => import('@/app/Components/MeetingTab'), {
  ssr: false
})

const MeetingRoom = () => {
  return (
    <section>
      <div>
        <MeetingTab />
      </div>
    </section>
  )
}

export default MeetingRoom