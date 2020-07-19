import React from 'react'
import styled from 'styled-components'
import { Container } from 'styled-bootstrap-grid'
import { Heading, SectionContainer } from '../../components'

const Wrapper = styled(SectionContainer).attrs({
  color: 'darkGrey'
})`
  display: flex;
  flex-direction: column;
`

const SkillsContainer = styled(Container)`
  margin-top: 200px;
`

const TitleWrapper = styled(Container)`
  margin-top: 200px;

  ${Heading} {
    text-align: left;
  }
`

const ReactLogo = styled.img.attrs({ src: require('../../assets/skills/react.png') })`
  height: 100px;
`

const Skills = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Heading>
          My Skills
        </Heading>
      </TitleWrapper>
      <SkillsContainer>
        <ReactLogo />
      </SkillsContainer>
    </Wrapper>
  )
}

export default Skills
