import React from "react"
import styled from "styled-components"
import testimonyImage from "../../images/testimony-image.png"

const TestimonyContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`
const ImageContainer = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`
const SectionTitle = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  color: #53924f;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
`

const Quote = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 500;
  color: #000000;
  text-align: center;
  width: 350px;
  font-size: 1.5em;
  line-height: 35px;
  margin-bottom: 30px;
  font-style: italic;
`

const Quotee = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  color: #000000;
  text-align: center;
  width: 350px;
  font-size: 1.3em;
`

const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TestimonySection = () => {
  return (
    <TestimonyContainer>
      <ImageContainer>
        <img src={testimonyImage} />
      </ImageContainer>
      <ContentContainer>
        <SectionTitle>PEOPLE ARE SAYING</SectionTitle>
        <Quote>
          "Ruby had such a good time at K-9 university. She had so much trouble
          walking on a leash before she came, but now she walks by our side the
          whole time!
        </Quote>
        <Quotee>- Ruby's Owner</Quotee>
      </ContentContainer>
    </TestimonyContainer>
  )
}

export default TestimonySection
