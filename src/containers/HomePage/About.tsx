import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '../../components'

const Image = styled.img.attrs({ src: require('../../assets/about/me.png') })`
  height: 400px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 50px;

  background-color: ${(props) => props.theme.colors.darkGrey};
`

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  margin: 0 50px;
`

const About = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading size="xl">
          <Text size="lg">who is </Text>
          Gabriel Campos
        </Heading>
      </HeadingWrapper>
      <TextWrapper>
        <Text>Testando</Text>
      </TextWrapper>
      <Image />
    </Wrapper>
  )
}

export default About
