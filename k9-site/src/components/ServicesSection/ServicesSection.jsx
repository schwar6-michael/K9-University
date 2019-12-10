import React from "react"
import styled from "styled-components"
import training from "../../images/training.png"
import boarding from "../../images/boarding.png"
import grooming from "../../images/grooming.png"
import serviceBlob from "../../images/service-blob.png"

const ServicesContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0;
  background: rgb(10, 255, 93, 0.12);
  margin-top: 50px;
`

const SectionTitle = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  color: #23395d;
  text-align: center;
  margin-bottom: 25px;
  font-size: 2em;
  margin-top: 20px;
`

const Services = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15%;
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  color: #23395d;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 600;
  transition: 200ms all ease-out;
  &:hover {
    transform: translateY(-20px);
    .imgWrap:after {
      transition: 300ms all ease-out;
      background: #23395d;
      content: "Book Today";
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
    }
  }
`

const Underline = styled.div`
  width: 400px;
  height: 2px;
  background: #808080;
  opacity: 0.15;
  margin-bottom: 100px;
  border-radius: 10px;
`

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid #23395d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10000px;
`

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <SectionTitle>Services</SectionTitle>
      <Underline></Underline>
      <Services>
        <Service>
          <p>Training</p>
          <ImageWrapper className="imgWrap">
            <img src={training} height="118px" alt="training" />
          </ImageWrapper>
        </Service>
        <Service>
          <p>Boarding</p>
          <ImageWrapper className="imgWrap">
            <img src={boarding} height="100px" alt="boarding" />
          </ImageWrapper>
        </Service>
        <Service>
          <p>Day Care</p>
          <ImageWrapper className="imgWrap">
            <img src={grooming} height="100px" alt="day care" />
          </ImageWrapper>
        </Service>
      </Services>
    </ServicesContainer>
  )
}

export default ServicesSection
