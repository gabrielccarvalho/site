import React from 'react'
import styled from 'styled-components'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { Heading, Text, SectionContainer } from '../../components'
import { device } from '../../baseStylesResponsive'

const Wrapper = styled(SectionContainer).attrs({
  color: 'black',
  transitions: { bottom: 'wave' }
})`
  display: flex;
  justify-content: space-between;
  padding: 100px 50px 0 50px;

  @media ${device.laptopM} {
    flex-direction: column;
    align-items: center;
  }
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  @media ${device.laptopM} {
    align-items: center;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

const StyledWriting = styled(Text)`
  overflow: hidden;
  white-space: nowrap;

  @media ${device.tablet} {
    width: 100%;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${StyledWriting} {
    &:nth-child(1) {
    animation: typing 3.5s steps(50, end);
    animation-fill-mode: forwards;
    }

    &:nth-child(2) {
      opacity: 0;
      animation: secondTyping 3.5s steps(50, end);
      animation-delay: 3.5s;
      animation-fill-mode: forwards;
    }

    @media ${device.laptopM} {

      &:nth-child(1) {
        animation: typing 1s steps(50, end);
        animation-fill-mode: forwards;
      }

      &:nth-child(2) {
        opacity: 0;
        animation: secondTyping 1s steps(50, end);
        animation-delay: 1s;
        animation-fill-mode: forwards;
      }

      &:nth-child(3) {
        opacity: 0;
        animation: secondTyping 1s steps(50, end);
        animation-delay: 2s;
        animation-fill-mode: forwards;
      }

      &:nth-child(4) {
        opacity: 0;
        animation: secondTyping 1s steps(50, end);
        animation-delay: 3s;
        animation-fill-mode: forwards;
      }
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes secondTyping {
      0% {
        width: 0;
      }
      1% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        width: 100%;
      }
    }
  }
`

const Title = styled(Heading)`
  text-align: left;
`

const Image = styled.img.attrs({ src: require('../../assets/about/me.png') })`
  height: 600px;

  @media ${device.laptopM} {
    width: 471.67px;
    margin-top: 50px;
  }
`

const About = () => {
  const { isMobile } = useWindowDimensions()

  return (
    <Wrapper>
      <HeadingWrapper>
        <Title size="xl">
          <Text size="lg">who is </Text>
          Gabriel Campos
        </Title>
        <TextWrapper>
          {!isMobile && (<>
            <StyledWriting size="mmd" weight="semiBold">
            I am a technology enthusiast, an IT student
            and a software developer.
            </StyledWriting>
            <StyledWriting size="mmd" weight="semiBold">
            Passionate about Javascript, Node, React and Open Source.
            </StyledWriting>
          </>)}
          {isMobile && (<>
            <StyledWriting size="mmd" weight="semiBold">
              I am a technology enthusiast, an IT
            </StyledWriting>
            <StyledWriting size="mmd" weight="semiBold">
              student and a software developer.
            </StyledWriting>
            <StyledWriting size="mmd" weight="semiBold">
              Passionate about Javascript, Node,
            </StyledWriting>
            <StyledWriting size="mmd" weight="semiBold">
              React and Open Source.
            </StyledWriting>
          </>)}
        </TextWrapper>
      </HeadingWrapper>
      <Image />
    </Wrapper>
  )
}

export default About
