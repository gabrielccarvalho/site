import React from 'react'
import styled from 'styled-components'
import { Heading, Text, SectionContainer } from '../../components'

const Wrapper = styled(SectionContainer).attrs({
  color: 'black',
  transitions: { bottom: 'wave' }
})`
  display: flex;
  justify-content: space-between;
  padding: 100px 50px 0 50px;
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled(Heading)`
  text-align: left;
`

const StyledWriting = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  
  animation: typing 3.5s steps(50, end);

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
`

const Image = styled.img.attrs({ src: require('../../assets/about/me.png') })`
  height: 600px;
`

const About = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title size="xl">
          <Text size="lg">who is </Text>
          Gabriel Campos
        </Title>
        <TextWrapper>
          <StyledWriting size="mmd" weight="semiBold">
            I am a technology enthusiast, an IT student in the university of RN
            (UFRN) and a software developer.
            <StyledWriting size="mmd" weight="semiBold">
              Passionate about Javascript and Open Source.
            </StyledWriting>
          </StyledWriting>
        </TextWrapper>
      </HeadingWrapper>
      <Image />
    </Wrapper>
  )
}

export default About
