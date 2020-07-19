import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Nav } from '../components'

const Wrapper = styled.nav`
  display: flex;
  position: sticky;
  width: 100%;
  height: 4rem;

  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.black};
`

const Image = styled.img.attrs({ src: require('../assets/header/fire.png') })`
  height: 50px;
  width: 50px;
  margin: 20px;
`

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/"><Image /></Link>
      <Nav />
    </Wrapper>
  )
}

export default Navbar
