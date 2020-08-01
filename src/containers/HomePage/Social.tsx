import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Heading } from '../../components'
import { device } from '../../baseStylesResponsive'

const Wrapper = styled(SectionContainer).attrs({
  color: 'selection',
  transitions: { bottom: 'round' }
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 50px 0 50px;

  @media ${device.laptopM} {
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled(Heading)``

const GitHubImage = styled.img.attrs({ src: require('../../assets/social/github.png') })`
  height: 150px;
`

const TwitchImage = styled.img.attrs({ src: require('../../assets/social/twitch.png') })`
  height: 150px;
  margin-left: 2rem;
`

const Social = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title size="lg">Get in touch in my social medias</Title>
      </TitleWrapper>
      <Container>
        <ItemContainer>
          <a href="https://github.com/gabrielccarvalho">
            <GitHubImage alt="github"/>
          </a>
        </ItemContainer>
        <ItemContainer>
          <a href="https://twitch.tv/camposao">
            <TwitchImage alt="twitch"/>
          </a>
        </ItemContainer>
        <ItemContainer>
          <a href="https://github.com/gabrielccarvalho">
            <GitHubImage alt="github"/>
          </a>
        </ItemContainer>
        <ItemContainer>
          <a href="https://twitch.tv/camposao">
            <TwitchImage alt="twitch"/>
          </a>
        </ItemContainer>
      </Container>
      <Container>
        <ItemContainer>
          <a href="https://github.com/gabrielccarvalho">
            <GitHubImage alt="github"/>
          </a>
        </ItemContainer>
        <ItemContainer>
          <a href="https://twitch.tv/camposao">
            <TwitchImage alt="twitch"/>
          </a>
        </ItemContainer>
        <ItemContainer>
          <a href="https://github.com/gabrielccarvalho">
            <GitHubImage alt="github"/>
          </a>
        </ItemContainer>
        <ItemContainer>
          <a href="https://twitch.tv/camposao">
            <TwitchImage alt="twitch"/>
          </a>
        </ItemContainer>
      </Container>
    </Wrapper>
  )
}

export default Social
