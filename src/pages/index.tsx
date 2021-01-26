import Head from 'next/head'
import React from 'react'

import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import OpeningHours from '@/components/OpeningHours'

import { Hero } from '@/styles/pages/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rochestown Pharmacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Hero />
      <About />
      <OpeningHours />
      <ContactUs />
    </>
  )
}
