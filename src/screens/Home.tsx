import React from 'react'

import { HomePage, Header } from '../containers'
const { About, Skills } = HomePage

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
    </>
  )
}

export default Home
