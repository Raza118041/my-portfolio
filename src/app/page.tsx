"use client"
import React, { useEffect } from 'react'
import Hero from './components/Hero/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    })
  }, [])
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Page