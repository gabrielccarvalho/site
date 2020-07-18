import React, { useState } from 'react'
import styled from 'styled-components'

type WrapperProps = {
  open: boolean;
}

const Line = styled.div`
  height: 3px;
  width: 25px;
  border-radius: 5px;

  background-color: ${props => props.theme.colors.white};
`

const Wrapper = styled.div<WrapperProps>`
  margin-right: 30px;
  cursor: pointer;

  ${Line} {
    margin-top: 5px;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg) translateY(200%)' : ''};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translateY(-200%)' : ''};
    }
  }
`

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper open={open} onClick={() => setOpen(!open)}>
      <Line />
      <Line />
    </Wrapper>
  )
}

export default Nav
