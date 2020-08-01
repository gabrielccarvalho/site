import React from 'react'

import { HomePage, Navbar } from '../containers'
const { About, Social, Tech } = HomePage

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Social />
      <Tech />
    </>
  )
}

export default Home
