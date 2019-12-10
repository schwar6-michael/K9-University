import React from "react"
import styled from "styled-components"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import quotes from "../../images/quotes-light-green.png"
import Fade from "react-reveal/Fade"

const TestimonyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  .awssld__container {
    height: 250px;
  }
  .awssld__content {
    height: 250px;
    position: relative;
    background: #ffffff;
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 500;
    color: #000000;
    text-align: center;
    font-size: 1.3em;
    line-height: 35px;
    margin-bottom: 30px;
    font-style: italic;
    padding: 0 20%;
  }
  .awssld__timer {
    background: transparent;
  }
  .quotes {
    position: absolute;
    top: 5%;
    left: 15%;
    width: 200px;
    opacity: 0.125;
  }
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
  margin-top: 100px;
`

const Quote = styled.span`
  position: relative;
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

const Underline = styled.div`
  width: 400px;
  height: 2px;
  background: orange;
  opacity: 0.7;
  margin-bottom: 10px;
  border-radius: 10px;
`

const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AutoplaySlider = withAutoplay(AwesomeSlider)

const TestimonySection = () => {
  return (
    <Fade bottom>
      <TestimonyContainer>
        <SectionTitle>People have had nice things to say...</SectionTitle>
        <Underline></Underline>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={10000}
          organicArrows={false}
          bullets={false}
        >
          <Quote>
            <img className="quotes" src={quotes} alt="quotes" />
            "Ruby had such a good time at K-9 university. She had so much
            trouble walking on a leash before she came, but now she walks by our
            side the whole time!"
          </Quote>
          <Quote>
            <img className="quotes" src={quotes} alt="quotes" />
            "Ruby had such a good time at K-9 university. She had so much
            trouble walking on a leash before she came, but now she walks by our
            side the whole time!"
          </Quote>
          <Quote>
            <img className="quotes" src={quotes} alt="quotes" />
            "Ruby had such a good time at K-9 university. She had so much
            trouble walking on a leash before she came, but now she walks by our
            side the whole time!"
          </Quote>
          <Quote>
            <img className="quotes" src={quotes} alt="quotes" />
            "Ruby had such a good time at K-9 university. She had so much
            trouble walking on a leash before she came, but now she walks by our
            side the whole time!"
          </Quote>
        </AutoplaySlider>
      </TestimonyContainer>
    </Fade>
  )
}

export default TestimonySection
