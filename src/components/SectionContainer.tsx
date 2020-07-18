import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Transition, Separator } from './TransitionTypes'
import { RoundMask, WaveMask } from '.'

type Color = keyof DefaultTheme['colors']

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  color: Color;
  padding?: string;
  transitions?: Transition;
}

const Container = styled.div<{reverse?: boolean; color: Color}>`
  position: relative;
  min-height: 300px;
  padding: 64px 0;
  background-color: ${props => props.theme.colors[props.color] || 'transparent'};


  .separator-top, .separator-bottom {
    display: flex;
    align-items: stretch;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto 0;
    filter: drop-shadow(0px -12px 9px #0000001f);
  }

  .separator-top {
    transform: scale(${props => props.reverse ? -1 : 1}, 1);
    bottom: calc(100% - 2px);
  }

  .separator-bottom {
    transform: scale(${props => props.reverse ? -1 : 1}, -1);
    z-index: 1;
    top: calc(100% - 2px);
  }
`

function getTransition (name: Separator) {
  return name === 'wave' ? WaveMask : RoundMask
}

function SectionContainer (props: ContainerProps) {
  const { className, children, transitions, color } = props
  const Top = transitions && transitions.top && getTransition(transitions.top)
  const Bottom = transitions && transitions.bottom && getTransition(transitions.bottom)
  return (
    <Container className={className} reverse={transitions && transitions.reverse} color={color}>
      {Top && <Top color={color} className="separator-top" aria-hidden />}
      {children}
      {Bottom && <Bottom color={color} className="separator-bottom" aria-hidden />}
    </Container>
  )
}

export default SectionContainer
