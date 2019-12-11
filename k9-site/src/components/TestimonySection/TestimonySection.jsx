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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 100px 0;
  .awssld__wrapper {
    height: 250px;
  }
  .awssld__content {
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

const SectionTitle = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  color: #53924f;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  line-height: 50px;
  width: 400px;
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
  background: #808080;
  opacity: 0.3;
  margin-bottom: 50px;
  border-radius: 10px;
  @media (max-width: 667px) {
    width: 250px;
  }
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
            "Marlon is a miracle worker. Ruby had so much trouble walking on a
            leash before the training, and now she walks perfectly by my side
            without a leash"
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
