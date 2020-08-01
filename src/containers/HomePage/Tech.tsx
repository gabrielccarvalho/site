import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Heading, Text } from '../../components'
import { device } from '../../baseStylesResponsive'

const Wrapper = styled(SectionContainer).attrs({
  color: 'background'
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

const TitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled(Heading)``

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const NodeImage = styled.img.attrs({ src: require('../../assets/tech/node.png') })`
  height: 150px;
`
const ReactImage = styled.img.attrs({ src: require('../../assets/tech/react.png') })`
  height: 150px;
`
const JSImage = styled.img.attrs({ src: require('../../assets/tech/javascript.png') })`
  height: 150px;
`

const Description = styled(Text)`
  padding: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5rem;

  ${ReactImage}, ${JSImage} {
    margin-top: 50px;
  }
`

const Tech = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title size="lg">Technologies that I'm working with</Title>
      </TitleWrapper>
      <Container>
        <ItemContainer>
          <NodeImage alt="node"/>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum interdum tristique. Quisque nec justo ligula. Vivamus ultrices ex nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </Description>
        </ItemContainer>
        <ItemContainer>
          <ReactImage alt="react"/>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum interdum tristique. Quisque nec justo ligula. Vivamus ultrices ex nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </Description>
        </ItemContainer>
        <ItemContainer>
          <JSImage alt="javascript"/>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum interdum tristique. Quisque nec justo ligula. Vivamus ultrices ex nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
          </Description>
        </ItemContainer>
      </Container>
    </Wrapper>
  )
}

export default Tech
