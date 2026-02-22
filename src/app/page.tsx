"use client"

import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import About from "@/components/About"
import EventsSplit from "@/components/EventsSplit"
import Schedule from "@/components/Schedule"
import MoreGames from "@/components/MoreGames"
import Rules from "@/components/Rules"
import Concert from "@/components/Concert"
import Vendors from "@/components/Vendors"
import Volunteer from "@/components/Volunteer"
import Footer from "@/components/Footer"

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Fade-up on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible') }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <EventsSplit />
      <Schedule />
      <MoreGames />
      <Rules />
      <Concert />
      <Vendors />
      <Volunteer />
      <Footer />
    </>
  )
}
