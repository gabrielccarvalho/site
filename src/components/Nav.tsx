import React, { useState } from 'react'
import styled from 'styled-components'

type WrapperProps = {
  open: boolean;
}

const Line = styled.div`
  height: 3px;
  width: 25px;
  border-radius: 5px;

  background-color: ${props => props.theme.colors.foreground};
`

const Background = styled.div<WrapperProps>`
  background-color: ${props => props.theme.colors.selection};
  position: absolute;
  right: -3000px;
  top: -3000px;
  width: 6000px;
  height: 6000px;
  animation: ${({ open }) => open ? '2s circle' : ''};
  display: ${({ open }) => open ? 'unset' : 'none'};

  @keyframes circle {
    from {
      clip-path: circle(0%);
    }
    to {
      clip-path: circle(6000px);
    }
  }
`

const Wrapper = styled.div<WrapperProps>`
  margin-right: 30px;
  cursor: pointer;

  ${Line} {
    margin-top: 5px;
    z-index: 999;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg) translateY(200%)' : ''};
      transition-duration: .8s;
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translateY(-200%)' : ''};
      transition-duration: .8s;
    }
  }
`

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Background open ={open}/>
      <Wrapper open={open} onClick={() => setOpen(!open)}>
        <Line />
        <Line />
      </Wrapper>
    </>
  )
}

export default Nav
